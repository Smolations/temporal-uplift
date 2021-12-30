import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { globalStateActions, useGlobalState } from 'state/global';
import themes from '../../sass/modules/theme.module.scss';


export default function Theme(props) {
  const [{ theme }, dispatch] = useGlobalState(); // @todo replace with new theme provider?

  useEffect(() => {
    const body = document.querySelector('body');
    const existingClass = body.className;
    const themeClass = themes[theme] || '';
    const classes = classNames('Theme', `Themes--${theme}`, existingClass, themeClass);

    body.className = classes;
    dispatch(globalStateActions.setThemeClass(themeClass));

    return () => body.className = classes;
  }, [theme]);

  return props.children;
}

Theme.displayName = 'Theme';

Theme.propTypes = {
  children: PropTypes.any,
};
