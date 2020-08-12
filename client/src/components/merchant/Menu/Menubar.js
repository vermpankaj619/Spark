import React from 'react';
import { NavLink } from 'react-router-dom';

import { Bar} from './style/style'
const MenuBar = () => (
  <Bar>
  <h1>Manages Product</h1>

    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/fullcatelog"
    >
    <i class="fa fa-list-ul" aria-hidden="true"></i>
      FULLCATELOG
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/outofstock"
    >
    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
     OUTOFSOCK
    </NavLink>
  
  </Bar>
);

export default MenuBar;