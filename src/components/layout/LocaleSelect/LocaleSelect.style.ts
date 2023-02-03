import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device } from '../../../styles/devices';

export const LSContainer = styled.div`
  position: absolute;
  right: 20px;
  padding-bottom: 2px;
  bottom: calc(100% - 20px);
  display: flex;

  @media ${device.mobileL} {
    right: 25px;
    bottom: calc(100% - 25px);
    padding-bottom: 4px;
  }
  @media ${device.tablet} {
    right: 30px;
    bottom: calc(100% - 30px);
    padding-bottom: 6px;
  }
  @media ${device.laptop} {
    right: 40px;
    bottom: calc(100% - 40px);
  }
  @media ${device.laptopL} {
    right: 50px;
    bottom: calc(100% - 50px);
  }
`;

export const LSBtn = styled.button`
  margin-left: 20px;
  height: 14px;
  width: 28px;
  position: relative;
  border: 1px solid transparent;
  border-color: ${({ theme }: { theme: ITheme }) => theme.colors.secondaryAlfa};
  @media ${device.mobileL} {
    height: 18px;
    width: 36px;
  }
  @media ${device.desktop} {
    height: 20px;
    width: 40px;
  }
`;
type LSBtnOverlayProps = {
  theme: ITheme;
  isActive: boolean;
};
export const LSBtnOverlay = styled.div<LSBtnOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${({ theme, isActive }: LSBtnOverlayProps) =>
    isActive ? 'transparent' : theme.colors.secondaryAlfa};
  pointer-events: ${({ isActive }: LSBtnOverlayProps) =>
    isActive ? 'none' : 'all'};
`;
export const LSImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
