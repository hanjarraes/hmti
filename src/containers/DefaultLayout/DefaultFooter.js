import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/hmti.png'
import { Col,  Row, Nav, NavItem  } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Row className="col-lg-12 pb-3"> 
          <Col xs="6" sm="6" lg="4">
            <div className="d-flex">
              <div className="pt-3">
                <img src={logo} alt="Logo" width="100" height="100"></img>
              </div>
              <div className="pl-2">
                <div className="font-15 pt-3">
                  HMTI Ibnu Sina Batam
                </div>
                <div className="font-12 pt-2 d-flex">
                  <div className="pr-2">
                    <i className="em em-world_map" aria-role="presentation" aria-label=""></i>
                  </div>
                  <a className="nav-footer" href="https://www.google.co.id/maps/place/Sekolah+Tinggi+Agama+Islam+(STAI)+Ibnu+Sina+Batam/@1.1453374,104.0142444,17z/data=!4m5!3m4!1s0x31d98985fa6dedd9:0x6fe29e9737d3c85e!8m2!3d1.145332!4d104.0164331">
                    Jl. Teuku Umar, Lubuk Baja Kota, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29444
                  </a>
                </div>
                <div className="font-12 d-flex">
                  <div className="pr-2">
                    <i class="em em-email" aria-role="presentation" aria-label="ENVELOPE"></i>
                  </div>
                  <div>
                    info@uis.ac.id
                  </div>
                </div>
                <div className="font-12 d-flex">
                  <div class="pr-2">
                    <i class="em em-telephone_receiver" aria-role="presentation" aria-label="TELEPHONE RECEIVER"></i>
                  </div>
                  <div>
                    (0778) 4083113
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="4">
            <div className="font-15 pt-3 font-bold">
              Tentang Kami
            </div>
            <div className="pt-2">
              <Nav className="d-md-down-none" navbar>
                <NavItem>
                  <NavLink to="/dashboard" className="nav-footer" >Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/users" className="nav-footer">Visi Misi</Link>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className="nav-footer">Proker</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="4">
            <div className="font-15 pt-3 font-bold">
              Tautan
            </div>
            <div className="pt-2">
              <Nav className="d-md-down-none" navbar>
                <NavItem>
                  <NavLink to="/dashboard" className="nav-footer" >Contoh 1</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/users" className="nav-footer">Contoh 2</Link>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className="nav-footer">Contoh 3</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
