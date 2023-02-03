import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device, size } from '../../../styles/devices';

export const PLOuter = styled.div`
  position: relative;
  width: 100%;
  max-width: ${size.mobileL};
  margin-left: auto;
  height: 100%;
`;
export const PLInner = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-top: 300px;
  padding-bottom: 100px;
  ::-webkit-scrollbar {
    width: 0;
  }
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  @media ${device.mobileL} {
    padding-top: 330px;
  }
  @media ${device.tablet} {
    padding-top: 360px;
  }
`;
export const PLOverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(
    to bottom,
    ${({ theme }: { theme: ITheme }) => theme.colors.primary} 220px,
    transparent 100%
  );
  pointer-events: fill;
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  @media ${device.mobileL} {
    background: linear-gradient(
      to bottom,
      ${({ theme }: { theme: ITheme }) => theme.colors.primary} 250px,
      transparent 100%
    );
    height: 330px;
  }
  @media ${device.tablet} {
    background: linear-gradient(
      to bottom,
      ${({ theme }: { theme: ITheme }) => theme.colors.primary} 280px,
      transparent 100%
    );
    height: 360px;
  }
`;
export const PLOverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to top,
    ${({ theme }: { theme: ITheme }) => theme.colors.primary} 20px,
    transparent 100%
  );
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  pointer-events: fill;
`;
