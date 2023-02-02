import { ITheme } from '../interfaces/Theme.interface';

export const lightTheme: ITheme = {
  id: 'light',
  fonts: {
    primary: "'Oswald', sans-serif;",
    decorated: "'Press Start 2P', cursive;",
  },
  colors: {
    primary: 'white',
    primaryAlfa: 'rgba(255,255,255,0.6)',
    secondary: 'black',
    secondaryAlfa: 'rgba(0,0,0,0.6)',
    textPrimary: 'black',
    textSecondary: 'white',
  },
  transitions: {
    easeOut: 'all 0.3s ease-out',
  },
};
