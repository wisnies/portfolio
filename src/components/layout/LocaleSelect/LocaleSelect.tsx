import { useAppContext } from '../../../context/appContext';
import { LSBtn, LSBtnOverlay, LSContainer, LSImg } from './LocaleSelect.style';

export const LocaleSelect: React.FC = () => {
  const { localeArr, changeLocale, locale } = useAppContext();
  return (
    <LSContainer>
      {localeArr.map((l) => (
        <LSBtn key={l.id} onClick={() => changeLocale(l.id)}>
          <LSImg src={`/assets/flags/${l.flag}`} />
          <LSBtnOverlay isActive={locale.id === l.id} />
        </LSBtn>
      ))}
    </LSContainer>
  );
};
