import types from './types';

export default function reducer(state, action) {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case types.SET_THEME: {
      const theme = payload;

      newState = {
        ...state,
        theme,
      };
    } break;

    case types.SET_THEME_CLASS: {
      const themeClass = payload;

      newState = {
        ...state,
        themeClass,
      };
    } break;

    default:
      newState = state;
  }

  return newState;
}
