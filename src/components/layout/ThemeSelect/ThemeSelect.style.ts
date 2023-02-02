import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device } from '../../../styles/devices';

export const TSContainer = styled.div`
  position: absolute;
  transform: rotate(270deg);
  transform-origin: bottom left;
  bottom: 20px;
  padding-bottom: 2px;
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    bottom: 25px;
    padding-bottom: 4px;
  }
  @media ${device.tablet} {
    bottom: 30px;
    padding-bottom: 6px;
  }
  @media ${device.laptop} {
    bottom: 40px;
  }
  @media ${device.laptopL} {
    bottom: 50px;
  }
`;

export const TSBtn = styled.button`
  margin-right: 10px;
  height: 12px;
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.decorated};
  font-size: 8px;
  letter-spacing: 3px;

  @media ${device.mobileL} {
    font-size: 10px;
    height: 14px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

type TSBoxProps = {
  theme: ITheme;
  isActive: boolean;
};
export const TSBox = styled.div<TSBoxProps>`
  height: 12px;
  width: 12px;
  margin-right: 8px;
  border: 1px solid transparent;
  border-color: ${({ theme }: TSBoxProps) => theme.colors.textPrimary};
  background-color: ${({ theme, isActive }: TSBoxProps) =>
    isActive ? theme.colors.textPrimary : 'transparent'};

  @media ${device.mobileL} {
    height: 14px;
    width: 14px;
  }
  @media ${device.desktop} {
    height: 18px;
    width: 18px;
    margin-rioght: 10px;
  }
`;
