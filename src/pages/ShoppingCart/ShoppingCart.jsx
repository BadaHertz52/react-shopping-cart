import * as S from './ShoppingCart.styles';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProductsFromCart, toggleAllCartProductsCheck } from 'redux/cart/cartActions';

import { Button } from 'components/@common';
import { CartProduct, PageLayout, Result, Selector } from 'components';

function ShoppingCart() {
  const { products, checkedProducts } = useSelector(store => store.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = checkedProducts.map(({ id }) => {
      const productIdx = products.findIndex(product => product.id === id);
      const { quantity, price } = products[productIdx];

      return quantity * price;
    });

    setTotalPrice(total.reduce((acc, cur) => acc + cur, 0));
    setChecked(products.length === checkedProducts.length);
  }, [products, checkedProducts]);

  const onChangeAllSelector = ({ target }) => {
    dispatch(toggleAllCartProductsCheck(target.checked));
    setChecked(prevChecked => !prevChecked);
  };

  const onClickSelectDeleteButton = () => {
    if (!checkedProducts.length) return;

    dispatch(removeSelectedProductsFromCart());
  };

  return (
    <PageLayout header="장바구니">
      <S.ShoppingCart>
        <div>
          <S.SelectorBox>
            <Selector label="전체" onChange={onChangeAllSelector} checked={checked} />
            <Button onClick={onClickSelectDeleteButton}>
              <S.SelectDeleteButton>선택삭제</S.SelectDeleteButton>
            </Button>
          </S.SelectorBox>
          <S.ProductListHeader>든든배송 상품 ({products.length}개)</S.ProductListHeader>
          <S.DivisionLine />
          {products.map(product => (
            <CartProduct key={`cart${product.id}`} {...product} />
          ))}
        </div>
        <Result
          title="결제예상금액"
          price={totalPrice}
          button={`주문하기(${checkedProducts.length}개)`}
        />
      </S.ShoppingCart>
    </PageLayout>
  );
}

export default ShoppingCart;