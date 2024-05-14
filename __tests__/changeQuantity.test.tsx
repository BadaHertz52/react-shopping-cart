import { CartItem } from '@appTypes/shoppingCart';
import { useUpdateCartItemCount } from '@hooks/shoppingCart';
import { cartItemsAtom } from '@recoil/shoppingCart';
import { waitFor } from '@testing-library/react';
import { useRecoilValue } from 'recoil';
import { describe, expect, it } from 'vitest';

import { INITIAL_ITEMS, QUANTITY_TEST_ITEMS } from './constants/cartItems';
import { renderHookWithRecoilRoot } from './utils/recoilTestUtils';

const renderUseUpdateCartItemCount = (index: number, initialItems?: CartItem[]) => {
  const { result } = renderHookWithRecoilRoot(() => {
    const cartItems = useRecoilValue(cartItemsAtom);
    const hookResult = useUpdateCartItemCount(cartItems[index]);

    return { cartItems, ...hookResult };
  }, initialItems);

  return result;
};

describe('수량 변경 테스트', () => {
  it('- 버튼을 누를 경우, 변경 가능한 수량이라면 수량이 1 감소한다.', async () => {
    const QUANTITY = INITIAL_ITEMS[0].quantity;
    const EXPECTED_QUANTITY = QUANTITY - 1;

    const result = renderUseUpdateCartItemCount(0);

    await waitFor(() => {
      expect(result.current).toBeDefined();
    });

    const newQuantity = result.current.getNewQuantity('minus');
    const validatedQuantity = result.current.validateQuantity(QUANTITY, 'minus');

    await waitFor(() => {
      result.current.updateCartItems(newQuantity);
    });

    //유효성 여부
    expect(validatedQuantity).toBeTruthy();
    expect(!!result.current.errorMessage).toBeFalsy();
    //상태 변경 여부
    expect(newQuantity).toBe(EXPECTED_QUANTITY);
    expect(result.current.cartItems[0].quantity).toBe(EXPECTED_QUANTITY);
  });

  it('+ 버튼을 누를 경우, 변경 가능한 수량이라면 수량이 1 증가한다.', async () => {
    const QUANTITY = INITIAL_ITEMS[0].quantity;
    const EXPECTED_QUANTITY = QUANTITY + 1;

    const result = renderUseUpdateCartItemCount(0);

    await waitFor(() => {
      expect(result.current).toBeDefined();
    });

    const validatedQuantity = result.current.validateQuantity(QUANTITY, 'plus');
    const newQuantity = result.current.getNewQuantity('plus');

    await waitFor(() => {
      result.current.updateCartItems(newQuantity);
    });

    //유효성 여부
    expect(validatedQuantity).toBeTruthy();
    expect(!!result.current.errorMessage).toBeFalsy();
    //상태 변경 여부
    expect(newQuantity).toBe(EXPECTED_QUANTITY);
    expect(result.current.cartItems[0].quantity).toBe(EXPECTED_QUANTITY);
  });

  describe('최저 수량, 최대 수량 테스트', () => {
    it('수량이 1일때 - 버튼을 누를 경우, 수량이 변경되지 않는다.', async () => {
      const QUANTITY = QUANTITY_TEST_ITEMS[0].quantity;

      const result = renderUseUpdateCartItemCount(1, QUANTITY_TEST_ITEMS);

      await waitFor(() => {
        expect(result.current).toBeDefined();
      });

      await waitFor(() => {
        result.current.onUpdateCartItemCount('minus');
      });

      const validatedQuantity = result.current.validateQuantity(QUANTITY, 'minus');

      expect(validatedQuantity).toBeFalsy();
      expect(result.current.cartItems[0].quantity).toBe(QUANTITY);
    });

    it('수량이 100개 일때 + 버튼을 누를 경우, 수량이 변경되지 않는다.', async () => {
      const QUANTITY = QUANTITY_TEST_ITEMS[1].quantity;

      const result = renderUseUpdateCartItemCount(0, QUANTITY_TEST_ITEMS);

      await waitFor(() => {
        expect(result.current).toBeDefined();
      });

      await waitFor(() => {
        result.current.onUpdateCartItemCount('plus');
      });

      const validatedQuantity = result.current.validateQuantity(QUANTITY, 'plus');

      expect(validatedQuantity).toBeFalsy();
      expect(result.current.cartItems[1].quantity).toBe(QUANTITY);
    });
  });
});