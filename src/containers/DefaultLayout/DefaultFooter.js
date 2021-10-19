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
        <Row className="col-lg-12 pb-3 footer-hmti"> 
          <Col xs="12" sm="12" lg="12">
          <hr className="hori-footer"/>
        </Col>
          <Col xs="12" sm="6" lg="4">
              <div className='footer'>
                <img src={logo} alt="Logo" style={{width:"20%"}}/>
                <div>
                  <div className="footer-him">HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UNIVERSITAS IBNU SINA</div>
                    <a className="nav-footer" href="https://www.google.co.id/maps/place/Sekolah+Tinggi+Agama+Islam+(STAI)+Ibnu+Sina+Batam/@1.1453374,104.0142444,17z/data=!4m5!3m4!1s0x31d98985fa6dedd9:0x6fe29e9737d3c85e!8m2!3d1.145332!4d104.0164331">
                      Jl. Teuku Umar, Lubuk Baja Kota, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29444
                    </a>
                </div>
                <div className="d-flex align-items-baseline" style={{fontWeight:"100"}}>
                  <i className="ri-mail-fill pr-2" style={{fontSize:"221%"}}/>
                  <div style={{fontSize:"150%"}} className='text-footer'>
                    hmti@uis.ac.id
                  </div>
                </div>
                <div className="d-flex align-items-baseline" style={{ fontWeight:"100"}}>
                  <i className="ri-phone-fill pr-2" style={{fontSize:"221%"}}/>
                  <div style={{fontSize:"150%"}} className='text-footer'>
                    085263132152
                  </div>
                </div>
              </div>
          </Col>

          <Col xs="12" sm="6" lg="3" className="nav-item-footer">
            <div className="font-bold">
              TENTANG KAMI
            </div>
            <div className="pt-2">
              <Nav className="d-md-down-none" navbar>
                <NavItem>
                  <NavLink to="" className="nav-link-footer font-semi-bold" >Sejarah</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="" className="nav-link-footer">Visi & Misi</Link>
                </NavItem>
                <NavItem>
                  <NavLink to="" className="nav-link-footer">Proker</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="" className="nav-link-footer">Agenda</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>

          <Col xs="12" sm="6" lg="3" className="nav-item-footer">
            <div className="font-bold">
              KONTEN
            </div>
            <div className="pt-2">
              <Nav className="d-md-down-none" navbar>
                <NavItem>
                  <NavLink to="/dashboard" className="nav-link-footer" >Beranda</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/users" className="nav-link-footer">Pengumungan</Link>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className="nav-link-footer">Berita</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="2" className="nav-item-footer">
            <div className="font-bold">
              LAINNYA
            </div>
            <div className="pt-2">
              <Nav className="d-md-down-none" navbar>
                <NavItem>
                  <NavLink to="/dashboard" className="nav-link-footer" >Temukan Kami</NavLink>
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
