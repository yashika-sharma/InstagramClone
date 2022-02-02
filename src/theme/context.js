import React, {createContext, useState, useEffect} from 'react';

import {themeColors} from '.';

export const ThemeContext = createContext();

// return the ThemeProvider as a wrapper
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{colors: themeColors[theme], toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
