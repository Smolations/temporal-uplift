import types from './types';


export function setTheme(newTheme) {
  return {
    type: types.SET_THEME,
    payload: newTheme,
  };
}

export function setThemeClass(newThemeClass) {
  return {
    type: types.SET_THEME_CLASS,
    payload: newThemeClass,
  };
}
