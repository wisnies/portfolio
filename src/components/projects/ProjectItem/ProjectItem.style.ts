import styled from 'styled-components';
import { ITheme } from '../../../libs/interfaces/Theme.interface';
import { device } from '../../../styles/devices';

export const PIContainer = styled.article`
  padding: 10px;
  margin-bottom: 20px;
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.primary};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.textPrimary};
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const PITitle = styled.h5`
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 9px;

  @media ${device.mobileL} {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media ${device.tablet} {
    font-size: 28px;
    margin-bottom: 14px;
  }
`;
export const PIYear = styled.p`
  font-size: 14px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.secondaryAlfa};
  margin-bottom: 7px;
  @media ${device.mobileL} {
    font-size: 16px;
    margin-bottom: 8px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const PITagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
export const PITag = styled.div`
  font-size: 14px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.textSecondary};
  padding: 2px 4px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const PIDescription = styled.p`
  font-size: 14px;

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const PILinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
export const PILink = styled.a`
  font-size: 14px;
  margin-left: 10px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.textSecondary};
  padding: 2px 4px;

  &:first-of-type {
    margin-left: 0;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
