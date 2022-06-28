import styled, { css } from 'styled-components';
import { LightProps } from '../Lights';

type WrapperProps = Omit<LightProps, 'setLit'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, lit }) => css`
    background: ${color == lit ? color : 'grey'};
    width: 180px;
    height: 180px;
    border-radius: 50%;
  `}
`;
