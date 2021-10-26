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
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        <div className="pr-2 py-2 logo-hmti"><img src={logo} alt="Logo" height="70"/></div>
        <div className="">HMTI UIS</div>
        <Nav className="ml-auto nav-header" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="/dashboard" className="nav-link pr-5">Beranda</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="pengumuman" className="nav-link">Pengumuman</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="tentang" className="nav-link">Tentang</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none pr-5">
            <NavLink to="repository" className="nav-link">Repository</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
