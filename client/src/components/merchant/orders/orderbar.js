import React from 'react';
import { NavLink } from 'react-router-dom';

import { Bar} from '../../style/theme'
const Orderbar = () => (
  <Bar>
  <h1>Manages Product</h1>

    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/fullcatelog"
    >
    <i class="fa fa-list-ul" aria-hidden="true"></i>
      NEW
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/outofstock"
    >
    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
     PREPARING
    </NavLink>
    <NavLink
    activeClassName="navbar__link--active"
    className="navbar__link"
    to="/outofstock"
  >
  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
  READY
  </NavLink>
  <NavLink
  activeClassName="navbar__link--active"
  className="navbar__link"
  to="/outofstock"
>
<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
TODAY ORDERS
</NavLink>
  
  </Bar>
);

export default Orderbar;