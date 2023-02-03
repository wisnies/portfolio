import { useAppContext } from '../../../context/appContext';
import { TSBox, TSBtn, TSContainer } from './ThemeSelect.style';

export const ThemeSelect: React.FC = () => {
  const {
    themeArr,
    locale: { id },
    changeTheme,
    theme,
  } = useAppContext();
  return (
    <TSContainer>
      {themeArr.map((t) => (
        <TSBtn key={t.id} onClick={() => changeTheme(t.id)}>
          <TSBox isActive={t.id === theme.id} />
          {t.label[id]}
        </TSBtn>
      ))}
    </TSContainer>
  );
};
