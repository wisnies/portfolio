import { Locale } from '../types/locale.type';

export interface ILocaleMeta {
  id: Locale;
  flag: string;
}

export interface ILocale extends ILocaleMeta {
  title: string;
  header: {
    stopCanvas: string;
    resumeCanvas: string;
    subtitle: string;
  };
}
