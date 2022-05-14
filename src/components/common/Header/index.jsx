import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from 'assets/icon/Cart.svg';
import { css } from 'styled-components';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.LogoBox to="/react-shopping-cart">
        <CartIcon />
        <Styled.Title>WOOWA SHOP</Styled.Title>
      </Styled.LogoBox>
      <Styled.MenuBox>
        <Styled.Menu to="/react-shopping-cart/cart">장바구니</Styled.Menu>
        <Styled.Menu to="/react-shopping-cart/orderList">주문목록</Styled.Menu>
      </Styled.MenuBox>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.header`
    ${({ theme }) => css`
      width: 100%;
      height: 80px;

      display: flex;
      align-items: center;
      justify-content: space-around;

      background: ${theme.colors.mint};
      color: ${theme.colors.white};
    `}
  `,
  LogoBox: styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      width: 50px;
      height: 40px;
      & path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  `,
  Title: styled.h1`
    font-weight: 900;
    font-size: 40px;
    padding-top: 3px;
  `,
  MenuBox: styled.nav`
    display: flex;
    gap: 45px;
  `,
  Menu: styled(Link)`
    font-weight: 500;
  `,
};

export default Header;
