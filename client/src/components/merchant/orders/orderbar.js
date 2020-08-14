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
      to="/orders"
    >
    <i class="fa fa-list-alt" aria-hidden="true"></i>
      NEW
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/prepar"
    >
    <i class="fa fa-clock-o" aria-hidden="true"></i>
     PREPARING
    </NavLink>
    <NavLink
    activeClassName="navbar__link--active"
    className="navbar__link"
    to="/raedy"
  >
  <i class="fa fa-truck" aria-hidden="true"></i>
  READY
  </NavLink>
  <NavLink
  activeClassName="navbar__link--active"
  className="navbar__link"
  to="/today"
>
<i class="fa fa-refresh" aria-hidden="true"></i>
TODAY'S ORDERS
</NavLink>
  
  </Bar>
);

export default Orderbar;