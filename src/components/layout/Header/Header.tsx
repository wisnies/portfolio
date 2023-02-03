import { useState } from 'react';
import { useAppContext } from '../../../context/appContext';
import { navData } from '../../../libs/data/nav.data';
import {
  HBtn,
  HContainer,
  HNav,
  HNavItem,
  HNavLink,
  HSubTitle,
  HTitle,
} from './Header.style';

export const Header: React.FC = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const {
    locale: { header, id },
    isPlaying,
  } = useAppContext();

  return (
    <HContainer>
      <HBtn>{isPlaying ? header.stopCanvas : header.resumeCanvas}</HBtn>
      <HTitle>Mateusz Wiśniewski</HTitle>
      <HSubTitle>{header.subtitle}</HSubTitle>
      <HNav>
        {navData.map((item) => (
          <HNavItem
            key={item.value}
            onClick={() => setCurrentValue(item.value)}
          >
            <HNavLink
              to={item.href}
              value={Math.abs(currentValue - item.value)}
            >
              {item.label[id]}
            </HNavLink>
          </HNavItem>
        ))}
      </HNav>
    </HContainer>
  );
};
