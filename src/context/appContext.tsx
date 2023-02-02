import React, { createContext, useContext, useEffect, useState } from 'react';
import { IAppContext } from '../libs/interfaces/AppContext.interface';
import { themes } from '../libs/themes';
import { locales } from '../libs/locales';
import { Locale } from '../libs/types/locale.type';
import { Theme } from '../libs/types/theme.type';
import { ILocaleMeta } from '../libs/interfaces/Locale.interface';
import { IThemeMeta } from '../libs/interfaces/Theme.interface';

export const AppContext = createContext<IAppContext>({} as IAppContext);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [locale, setLocale] = useState(locales.plPl);
  const [localeArr, setLocaleArr] = useState<ILocaleMeta[]>([]);
  const [theme, setTheme] = useState(themes.dark);
  const [themeArr, setThemeArr] = useState<IThemeMeta[]>([]);

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
    if (localeId === 'en-GB') setLocale(locales.enGB);
    if (localeId === 'pl-PL') setLocale(locales.plPl);
    console.log(locale.id);
  };
  console.log(locale);
  return (
    <AppContext.Provider
      value={{
        locale,
        localeArr,
        theme,
        themeArr,
        changeLocale,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
