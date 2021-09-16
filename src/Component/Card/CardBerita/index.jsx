import React from 'react';
import fotoReact from '../../../assets/img/React.jpg'
import {Col, Row, } from 'reactstrap';

const CardBerita = () => {
  return (
        <div>
          <Row className="px-5" data-aos="fade-right"  data-aos-anchor-placement="center-center">
            <Col xs="12" sm="12" md="12" className="font-bold font-big px-5"> Kegiatan Terbaru </Col>
          </Row>
          <Row className="px-5 pt-2 pb-4">
              <Col xs={12} sm={12} md={5} data-aos="flip-up" data-aos-anchor-placement="center-center">
                <img src={fotoReact} alt="Logo" className="brt-gambar1"></img>
              </Col>
              <Col xs={12} sm={12} md={7} >
                <Row>
                  <Col xs={12} sm={12} md={6} data-aos="flip-left" data-aos-anchor-placement="center-center">
                    <img src={fotoReact} alt="Logo" className="w-100 pb-3"></img>
                  </Col>
                  <Col xs={12} sm={12} md={6} data-aos="flip-left" data-aos-anchor-placement="center-center">
                    <img src={fotoReact} alt="Logo" className="w-100"></img>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col xs={12} sm={12} md={6} data-aos="flip-right" data-aos-anchor-placement="center-bottom">
                    <img src={fotoReact} alt="Logo" className="w-100 pb-3"></img>
                  </Col>
                  <Col xs={12} sm={12} md={6} data-aos="flip-right" data-aos-anchor-placement="center-bottom">
                    <img src={fotoReact} alt="Logo" className="w-100"></img>
                  </Col>
                </Row>
              </Col>
          </Row>
        </div>
  );
};

export default CardBerita;
