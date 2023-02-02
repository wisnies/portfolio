import type { Colors, Font, Theme, Transitions } from '../types/theme.type';

export interface IThemeMeta {
  id: Theme;
}
export interface ITheme extends IThemeMeta {
  fonts: Font;
  colors: Colors;
  transitions: Transitions;
}
