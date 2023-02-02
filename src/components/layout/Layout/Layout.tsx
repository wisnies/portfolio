import { ThemeProvider } from 'styled-components';
import { useAppContext } from '../../../context/appContext';
import LocaleSelect from '../LocaleSelect';
import ThemeSelect from '../ThemeSelect';
import { LayoutOuter, LayoutInner } from './Layout.style';

export const Layout: React.FC = () => {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <LayoutOuter>
        <LocaleSelect />
        <ThemeSelect />
        <LayoutInner>a</LayoutInner>
      </LayoutOuter>
    </ThemeProvider>
  );
};
