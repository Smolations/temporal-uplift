import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { useGlobalState } from 'state/global';

import themeDarkLogo from './theme-dark-logo.png';
import themeLightLogo from './theme-light-logo.png';
import themeOrangeLogo from './theme-orange-logo.png';

import './Layout.scss';


const logosByTheme = {
  light: themeLightLogo,
  dark: themeDarkLogo,
  orange: themeOrangeLogo
};

export default function Layout(props) {
  const {
    className,
  } = props;

  const [{ theme }] = useGlobalState();
  const logo = logosByTheme[theme];console.log(theme)
  const classes = classNames('Layout', className);

  return (
    <div className={classes}>
      <main className="Layout--view-container">
        <Outlet />
      </main>
    </div>
  );
}

Layout.displayName = 'Layout';

Layout.propTypes = {
  // children: PropTypes.any,
  className: PropTypes.string,
};
