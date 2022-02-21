import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'react-router-dom';

// import { routes } from 'pages';
import { Link } from '../Link';

import logo from '../../logo_64x64.png';
import './Nav.scss';


/**
 * A classic nav component. Nothing fancy, but it's got all the top level
 * routes linked. Implementation to determine current route is also
 * demonstrated.
 */
export default function Nav(props) {
  const {
    className,
    routes,
  } = props;

  const classes = classNames('Nav', className);

  // {
  //   routes[0].children
  //   .filter((route) => (route.nav !== false))
  //   .map((route) => (
  //     <li key={route.path}>
  //       <Link to={route.path}>
  //         {route.name}
  //       </Link>
  //     </li>
  //   ));
  // }

  // likely need a map, based on routes, to use for menu names..
  // a generator function of some sort would serve this purpose..
  return (
    <header className={classes}>
      <img className="Nav--logo" src={logo} />
      <nav>
        <ul className="Nav--list">
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li>
            <Link to="/main/testies">Testies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Nav.displayName = 'Nav';

Nav.propTypes = {
  className: PropTypes.string,
};
