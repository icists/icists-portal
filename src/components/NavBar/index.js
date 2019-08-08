import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ routes }) => (
  <div className="nav-bar">
    <ul>
      {
        Object.keys(routes).map(pageKey => {
          const page = routes[pageKey];
          return (
            <li key={`nav-bar-page-${page.name}`}>
              <Link to={page.link}>
                {page.name}
              </Link>
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default NavBar;