import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { routes } from 'pages';
import { useGlobalState } from 'state/global';

import { Header } from '../Header';
import { DropdownNav, Nav } from '../Nav';

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
    children,
    className,
  } = props;

  const [{ theme }] = useGlobalState();
  const logo = logosByTheme[theme];console.log(theme)
  const classes = classNames('Layout', className);

  const logoElement = (
    <img
      className="Layout--logo"
      alt="SmolaGaming logo"
      src={logo}
    />
  );

  return (
    <div className={classes}>
      <Header
        as="h1"
        className="Layout--Header"
        heading={logoElement}
      >
        {/* <Nav routes={routes} /> */}
        {/* <DropdownNav /> */}
        <Header as="h2" heading="Temporal Uplift" />
      </Header>

      <main className="Layout--page-container">
        <Outlet />
      </main>
    </div>
  );
}

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
