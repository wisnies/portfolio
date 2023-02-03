import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IAppContext } from '../libs/interfaces/AppContext.interface';
import { ILocaleMeta } from '../libs/interfaces/Locale.interface';
import { IThemeMeta } from '../libs/interfaces/Theme.interface';
import { locales } from '../libs/locales';
import { themes } from '../libs/themes';
import { Locale } from '../libs/types/locale.type';
import { Theme } from '../libs/types/theme.type';

export const AppContext = createContext<IAppContext>({} as IAppContext);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [locale, setLocale] = useState(locales.plPl);
  const [localeArr, setLocaleArr] = useState<ILocaleMeta[]>([]);
  const [theme, setTheme] = useState(themes.dark);
  const [themeArr, setThemeArr] = useState<IThemeMeta[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const lArr = Object.values(locales).map(
      (l): ILocaleMeta => ({
        id: l.id,
        flag: l.flag,
      })
    );
    setLocaleArr(lArr);
    const tArr = Object.values(themes).map(
      (t): IThemeMeta => ({
        id: t.id,
        label: t.label,
      })
    );
    setThemeArr(tArr);
  }, []);

  const changeTheme = (themeId: Theme) => {
    if (themeId === theme.id) return;
    if (themeId === 'dark') setTheme(themes.dark);
    if (themeId === 'light') setTheme(themes.light);
  };
  const changeLocale = (localeId: Locale) => {
    if (localeId === locale.id) return;
    if (localeId === 'enGB') setLocale(locales.enGB);
    if (localeId === 'plPL') setLocale(locales.plPl);
  };

  const context = useMemo(
    () => ({
      locale,
      localeArr,
      theme,
      themeArr,
      changeLocale,
      changeTheme,
      isPlaying,
    }),
    [locale, localeArr, theme, themeArr, changeLocale, changeTheme, isPlaying]
  );
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
