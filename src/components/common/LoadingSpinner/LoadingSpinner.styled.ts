import { COLOR } from '@styles/style.constant';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
interface WrapperProps {
  $width: string;
  $height: string;
}

export const LoadingSpinnerWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export const LoadingSpinner = styled.div`
  border: 4px solid ${COLOR.white};
  border-top: 4px solid ${COLOR.black};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;
