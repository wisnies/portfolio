import { useAppContext } from '../../../context/appContext';
import { TSBox, TSBtn, TSContainer } from './ThemeSelect.style';

export const ThemeSelect: React.FC = () => {
  const {
    themeArr,
    locale: { themes },
    changeTheme,
    theme,
  } = useAppContext();
  return (
    <TSContainer>
      {themeArr.map((t) => (
        <TSBtn key={t.id} onClick={() => changeTheme(t.id)}>
          <TSBox isActive={t.id === theme.id} />
          {themes[t.id]}
        </TSBtn>
      ))}
    </TSContainer>
  );
};
