import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppContext } from '../../../context/appContext';
import Header from '../Header';
import LocaleSelect from '../LocaleSelect';
import RouteViews from '../RouteViews';
import ThemeSelect from '../ThemeSelect';
import { LayoutOuter, LayoutInner } from './Layout.style';

export const Layout: React.FC = () => {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <LayoutOuter>
        <LocaleSelect />
        <ThemeSelect />
        <LayoutInner>
          <BrowserRouter>
            <Header />
            <RouteViews />
          </BrowserRouter>
        </LayoutInner>
      </LayoutOuter>
    </ThemeProvider>
  );
};
