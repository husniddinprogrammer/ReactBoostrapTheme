import React, { createContext, useContext, useReducer } from 'react';

// Theme actions
const themeActions = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_THEME: 'SET_THEME'
};

// Initial state
const initialState = {
  isDark: false,
  theme: 'light'
};

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case themeActions.TOGGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
        theme: state.isDark ? 'light' : 'dark'
      };
    case themeActions.SET_THEME:
      return {
        ...state,
        isDark: action.payload === 'dark',
        theme: action.payload
      };
    default:
      return state;
  }
};

// Create context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: themeActions.TOGGLE_THEME });
  };

  const setTheme = (theme) => {
    dispatch({ type: themeActions.SET_THEME, payload: theme });
  };

  const value = {
    ...state,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
