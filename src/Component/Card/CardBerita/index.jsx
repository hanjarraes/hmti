import React from 'react';
import Tentang1 from '../../../assets/img/Tentang/tentang1.JPG'
import Tentang2 from '../../../assets/img/Tentang/tentang2.JPG'
import Tentang3 from '../../../assets/img/Tentang/tentang3.JPG'
import Tentang4 from '../../../assets/img/Tentang/tentang4.JPG'
import Tentang5 from '../../../assets/img/Tentang/tentang5.JPG'
import { Col, Row, } from 'reactstrap';

const CardBerita = () => {
  return (
    <div className="card-berita">
      <Row className="px-5 pt-2 pb-4 foto-card-berita">
        <Col xs={12} sm={12} md={8}>
          <img src={Tentang3} alt="Logo" className="brt-gambar1"></img>
        </Col>
        <Col xs={12} sm={12} md={4} className="foto-card-berita-kecil">
          <Row>
            <Col xs={12} sm={12} md={12} className='h-100'>
              <img src={Tentang2} alt="Logo" className="w-100 pb-3"></img>
            </Col>
          </Row>
          <Row className="pt-3 margin-card">
             <Col xs={12} sm={12} md={12} className='h-100 '>
              <img src={Tentang1} alt="Logo" className="w-100"></img>
            </Col>
            {/* <Col xs={12} sm={12} md={6} className='h-100 h-1'>
              <img src={Tentang4} alt="Logo" className="w-100 pb-3"></img>
            </Col>
            <Col xs={12} sm={12} md={6} className='h-80 h-2'>
              <img src={Tentang5} alt="Logo" className="w-100"></img>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardBerita;
