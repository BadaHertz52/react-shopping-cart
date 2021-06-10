import styled from "styled-components";
import { COLOR } from "../../constants/style";

export const OrdersList = styled.section``;

export const PageTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 4px solid ${COLOR.GRAY_800};
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
`;

export const List = styled.ol`
  padding-top: 3.5rem;
`;