import { CartItem } from '@appTypes/shoppingCart';
import { Checkbox } from '@components/common';
import { CartListItem } from '@components/shoppingCart';
import { useCheckCartItem } from '@hooks/index';
import { cartItemsAtom } from '@recoil/shoppingCart';
import { useRecoilValue } from 'recoil';

import * as Styled from './CartList.styled';

interface CartListProps {
  cartItems: CartItem[];
}

const CartList: React.FC<CartListProps> = () => {
  const cartItems = useRecoilValue(cartItemsAtom);

  const { isAllChecked, onCheckAllCartItems } = useCheckCartItem();

  const handleClick = () => {
    onCheckAllCartItems(!isAllChecked);
  };

  return (
    <div>
      <Styled.CartListButtonGroup>
        <Checkbox checked={isAllChecked} onClick={handleClick} />
        <span className="label">전체 선택</span>
      </Styled.CartListButtonGroup>
      <Styled.CartItemContainer>
        {cartItems.map((cartItem) => (
          <CartListItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Styled.CartItemContainer>
    </div>
  );
};

export default CartList;
