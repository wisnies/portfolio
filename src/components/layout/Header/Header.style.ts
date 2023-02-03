import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device } from '../../../styles/devices';

export const HContainer = styled.header`
  padding: 10px;
  width: 100%;
`;
export const HBtn = styled.button`
  font-size: 6px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.decorated};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  margin-bottom: 10px;
  &:hover {
    color: ${({ theme }: { theme: ITheme }) => theme.colors.secondaryAlfa};
  }
  @media ${device.mobileL} {
    font-size: 8px;
  }
  @media ${device.laptop} {
    font-size: 9px;
    transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  }
  @media ${device.laptopL} {
    font-size: 10px;
  }
  @media ${device.desktopL} {
    font-size: 14px;
  }
`;
export const HTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.primary};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  text-transform: capitalize;
  letter-spacing: 2px;
  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 36px;
  }
  @media ${device.laptop} {
    font-size: 40px;
    transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  }
  @media ${device.laptopL} {
    font-size: 48px;
  }
  @media ${device.desktop} {
    font-size: 52px;
  }
  @media ${device.desktopL} {
    font-size: 60px;
  }
`;
export const HSubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.primary};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;
export const HNav = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const HNavItem = styled.div`
  height: 16px;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media ${device.mobileL} {
    height: 18px;
    margin-bottom: 9px;
  }
  @media ${device.tablet} {
    height: 20px;
    margin-bottom: 10px;
  }
  @media ${device.laptopL} {
    height: 22px;
    margin-bottom: 11px;
  }
  @media ${device.desktop} {
    height: 26px;
    margin-bottom: 13px;
  }
`;
type HNavLinkProps = {
  theme: ITheme;
  value: number;
};
export const HNavLink = styled(Link)<HNavLinkProps>`
  font-size: ${({ value }: HNavLinkProps) =>
    value === 0 ? 14 : value === 1 ? 12 : 10}px;
  font-weight: ${({ value }: HNavLinkProps) => (value === 0 ? 700 : 400)};
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.primary};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  text-transform: capitalize;
  transition: ${({ theme }: { theme: ITheme }) => theme.transitions.easeOut};
  @media ${device.mobileL} {
    font-size: ${({ value }: HNavLinkProps) =>
      value === 0 ? 16 : value === 1 ? 14 : 12}px;
  }
  @media ${device.tablet} {
    font-size: ${({ value }: HNavLinkProps) =>
      value === 0 ? 18 : value === 1 ? 16 : 14}px;
  }
  @media ${device.laptopL} {
    font-size: ${({ value }: HNavLinkProps) =>
      value === 0 ? 20 : value === 1 ? 18 : 16}px;
  }
  @media ${device.desktop} {
    font-size: ${({ value }: HNavLinkProps) =>
      value === 0 ? 24 : value === 1 ? 22 : 20}px;
  }
`;
