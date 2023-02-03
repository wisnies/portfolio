import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device } from '../../../styles/devices';

export const LayoutOuter = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};

  @media ${device.mobileL} {
    padding: 25px;
  }
  @media ${device.tablet} {
    padding: 30px;
  }
  @media ${device.laptop} {
    padding: 40px;
  }
  @media ${device.laptopL} {
    padding: 50px;
  }
`;
export const LayoutInner = styled.main`
  border: 1px solid transparent;
  border-color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
`;
