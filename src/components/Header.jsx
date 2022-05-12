import styled from 'styled-components';
import { GiShoppingCart } from 'react-icons/gi';
import { COLORS } from '../styles/theme';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClickMoveHome = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledTitleWrapper onClick={handleClickMoveHome}>
          <GiShoppingCart />
          <StyledTitle>WOOWA SHOP</StyledTitle>
        </StyledTitleWrapper>
        <StyledNavWrapper>
          <StyledNavButton>장바구니</StyledNavButton>
          <StyledNavButton>주문목록</StyledNavButton>
        </StyledNavWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  top: 0;
  background: ${COLORS.PRIMARY};
  box-shadow: 0px 4px 4px ${COLORS.BOX_SHADOW};
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  color: ${COLORS.WHITE};
  cursor: pointer;
`;

const StyledTitle = styled.span`
  margin-left: 12px;
`;

const StyledNavWrapper = styled.div`
  display: flex;
`;

const StyledNavButton = styled.button`
  margin: 0 5px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 18px;
  color: ${COLORS.WHITE};
`;

export default Header;
