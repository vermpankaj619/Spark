
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {getorders , filteritem , prepare } from '../../../actions/merActions';
import { connect } from "react-redux";
import { Loader } from '../../style/profile'
import Loading from '../../style/comman/loading.gif'

import { Bar} from '../../style/theme'
class  Orderbar  extends Component {
   render() {
    const { orders  } = this.props.mer;
   return (
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
    to="/ready"
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

    }
  }

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  mer:state.mer
});

export default connect(mapStateToProps,{getorders ,prepare, filteritem })(Orderbar)