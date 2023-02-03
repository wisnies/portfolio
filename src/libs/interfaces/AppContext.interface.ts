import { Locale } from '../types/locale.type';
import type { Theme } from '../types/theme.type';
import { ILocale, ILocaleMeta } from './Locale.interface';
import { ITheme, IThemeMeta } from './Theme.interface';

export interface IAppContext {
  locale: ILocale;
  localeArr: ILocaleMeta[];
  theme: ITheme;
  themeArr: IThemeMeta[];
  changeLocale: (localeId: Locale) => void;
  changeTheme: (themeId: Theme) => void;
  isPlaying: boolean;
}
