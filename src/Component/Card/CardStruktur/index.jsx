import React from 'react';
import {Col, Row, } from 'reactstrap';
import Struktur from '../../../assets/img/stuktrur.jpg'

const CardStruktur = () => {
  return (
        <div>
          <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">  STRUKTUR ORGANISASI HMTI <br/> IBNUSINA</Col>
          </Row>

          <Row className="pb-3 justify-content-center d-flex" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <Col xs={12} sm={12} md={12} lg={5} className="font-text text-center">
            Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum,  dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
            </Col>
          </Row>

          <Row className="pb-3 justify-content-center d-flex" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <Col xs={8} sm={8} md={8} lg={8}>
            <img src={Struktur} alt="Logo" className="w-100"></img>
            </Col>
          </Row>
        </div>
  );
};

export default CardStruktur;
