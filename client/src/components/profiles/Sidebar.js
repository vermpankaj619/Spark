import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  
    width: 14rem;   /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    height:80%;
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 24.5rem;
    padding-left:2rem;
    
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/profile', /* path is used as id to check which NavItem is active basically */
                  name: 'Profile',
                  css: "fa fa-pie-chart" ,
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/Favourites',
                  name: 'Favourites',
                  css: 'fa fa-gratipay',
                  key: 2
                },
                {
                    path: '/payment',
                    name: 'Payment',
                    css: 'fa fa-credit-card-alt',
                    key: 3
                  },
                  {
                    path: '/Address',
                    name: 'Address',
                    css: 'fa fa-address-card',
                    key: 4
                  },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 100%; /* width must be same size as NavBar to center */
  
  
   background: #edf1f7;
   padding-top:1rem;
  text-align:left;
  padding-left:1rem;
  color: black;
   i {
       padding-right:1rem;
       color: black;
       font-size: 1.3rem;
   }
   i:active {
   color: yellow;
  }
   span {
    color: black;
    font-size: 1.3rem;
    font-family:'Nexa-bold';
   }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path}  onClick={this.handleClick}>
                <i class={this.props.css}  aria-hidden="true"></i>
                   <span> {this.props.name}</span>
                </Link>
            </StyledNavItem>
        );
    }
}



class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}

export default Sidebar;