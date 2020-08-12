import React, { Component } from 'react';
import Menubar from './Menubar';
import {  getCatlog } from '../../../actions/merActions';
import { connect } from "react-redux";
 class Fullcatalog extends Component {

    componentDidMount() {
        this.props.getCatlog()
    }

    render() {
        return (
            <div>
            <Menubar/>  
            dfhfjdfd
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    mer:state.mer
  });

export default connect(mapStateToProps,{getCatlog})(Fullcatalog)