import { ITheme } from '../interfaces/Theme.interface';

export const darkTheme: ITheme = {
  id: 'dark',
  fonts: {
    primary: "'Oswald', sans-serif;",
    decorated: "'Press Start 2P', cursive;",
  },
  colors: {
    primary: 'black',
    primaryAlfa: 'rgba(0,0,0,0.6)',
    secondary: 'white',
    secondaryAlfa: 'rgba(255,255,255,0.6)',
    textPrimary: 'white',
    textSecondary: 'black',
  },
  transitions: {
    easeOut: 'all 0.3s ease-out',
  },
};
