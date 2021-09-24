import React from 'react';
import fotoReact from '../../../assets/img/React.jpg'
import { Col, Row, } from 'reactstrap';

const CardBerita = () => {
  return (
    <div className="card-berita">
      <Row className="px-5">
        <Col xs="12" sm="12" md="12" className="font-bold font-big px-5"> KEGIATAN TERBARU</Col>
      </Row>
      <Row className="px-5 pt-2 pb-4 foto-card-berita">
        <Col xs={12} sm={12} md={5}>
          <img src={fotoReact} alt="Logo" className="brt-gambar1"></img>
        </Col>
        <Col xs={12} sm={12} md={7} >
          <Row>
            <Col xs={12} sm={12} md={6} className='h-100'>
              <img src={fotoReact} alt="Logo" className="w-100 pb-3"></img>
            </Col>
            <Col xs={12} sm={12} md={6} className='h-80'>
              <img src={fotoReact} alt="Logo" className="w-100"></img>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col xs={12} sm={12} md={6} className='h-100'>
              <img src={fotoReact} alt="Logo" className="w-100 pb-3"></img>
            </Col>
            <Col xs={12} sm={12} md={6} className='h-80'>
              <img src={fotoReact} alt="Logo" className="w-100"></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardBerita;
