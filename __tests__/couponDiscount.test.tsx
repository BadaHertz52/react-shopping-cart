import { CartItem } from '@appTypes/shoppingCart';
import { useCouponDiscount } from '@hooks/coupon';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { renderCouponHookWithRecoilRoot } from './utils';
//주문 금액: 73,000원
const TEST_ITEMS: CartItem[] = [
  {
    id: 106,
    quantity: 3,
    product: {
      id: 2,
      name: '나이키',
      price: 1000,
      imageUrl: '',
      category: 'fashion',
    },
  },
  {
    id: 306,
    quantity: 2,
    product: {
      id: 3,
      name: '아디다스',
      price: 20000,
      imageUrl: '',
      category: 'fashion',
    },
  },
  {
    id: 634,
    quantity: 1,
    product: {
      id: 21,
      name: '아식스',
      price: 30000,
      imageUrl: '',
      category: 'fashion',
    },
  },
];
const TEST_ITEM_IDS = TEST_ITEMS.map((item) => item.id);
const TEST_ITEMS_TOTAL_AMOUNTS = TEST_ITEMS.reduce((acc, cur) => acc + cur.quantity * cur.product.price, 0);

const renderCouponDiscount = (selectedItemIds: number[]) =>
  renderCouponHookWithRecoilRoot(() => useCouponDiscount(), TEST_ITEMS, selectedItemIds);

describe('쿠폰 할인 금액 테스트', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-05-22T04:10:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('5,000 원 할인 쿠폰을 사용하면, 5,000원이 할인된다.', () => {
    const EXPECT_DISCOUNT = 5000;

    const { result } = renderCouponDiscount(TEST_ITEM_IDS);
    const { calculateCouponDiscount } = result.current;

    expect(calculateCouponDiscount('FIXED5000')).toBe(EXPECT_DISCOUNT);
  });

  describe('2개 구매 시 1개 무료 쿠폰 테스트', () => {
    it('2개 구매 시 1개 무료 쿠폰 사용 시, 수량 1개에 대한 가격만큼 할인된다.', () => {
      const EXPECT_DISCOUNT = TEST_ITEMS[0].product.price;

      const { result } = renderCouponDiscount([TEST_ITEM_IDS[0]]);
      const { calculateCouponDiscount } = result.current;

      expect(calculateCouponDiscount('BOGO')).toBe(EXPECT_DISCOUNT);
    });

    it('2개 구매 시 1개 무료 쿠폰 사용 시, 적용 대상인 여러 상품 중 가격이 가장 높은 상품의 가격 만큼 할인된다.', () => {
      const EXPECT_DISCOUNT = TEST_ITEMS[1].product.price;

      const { result } = renderCouponDiscount(TEST_ITEM_IDS);
      const { calculateCouponDiscount } = result.current;

      expect(calculateCouponDiscount('BOGO')).toBe(EXPECT_DISCOUNT);
    });
  });

  it('5만원 이상 구매 시 무료 배송 쿠폰 사용 시, 배송비(3,000d원)가 무료이다.', () => {
    const EXPECT_DISCOUNT = 3000;

    const { result } = renderCouponDiscount(TEST_ITEM_IDS);
    const { calculateCouponDiscount } = result.current;

    expect(calculateCouponDiscount('FREESHIPPING')).toBe(EXPECT_DISCOUNT);
  });

  it('미라클모닝 30% 할인 쿠폰을 사용하면 주문 가격의 30% 할인된다.', () => {
    const EXPECT_DISCOUNT = TEST_ITEMS_TOTAL_AMOUNTS * 0.3;

    const { result } = renderCouponDiscount(TEST_ITEM_IDS);
    const { calculateCouponDiscount } = result.current;

    expect(calculateCouponDiscount('MIRACLESALE', TEST_ITEMS_TOTAL_AMOUNTS)).toBe(EXPECT_DISCOUNT);
  });
});