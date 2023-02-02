import GlobalStyle from './styles/global';
import Layout from './components/layout/Layout';
import { AppContextProvider } from './context/appContext';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </>
  );
};
