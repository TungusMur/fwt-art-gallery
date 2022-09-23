import { createContext } from 'react';

export type IThemeContext = { theme: 'light' | 'dark'; setTheme: () => void };

const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});

export default ThemeContext;
