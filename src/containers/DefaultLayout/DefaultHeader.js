import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/hmti.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <div className="header-logo">
          <img src={logo} alt="Logo" width="40" height="40"></img>
        </div>
        <div className="">
          HMTI Ibnu Sina
        </div>
        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="/dashboard" className="nav-link pr-5">Beranda</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="#" className="nav-link">Pengumuman</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="#" className="nav-link">Blog</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="#" className="nav-link">Repository</NavLink>
          </NavItem>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
