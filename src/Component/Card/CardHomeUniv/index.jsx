import React from 'react';
import {Col, Row, } from 'reactstrap';

const CardHomeUniv = () => {
  return (
        <div>
          <Row data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">  HMTI UNIVERSITAS IBNU SINA </Col>
          </Row>
          <Row className="px-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
              <Col xs={12} sm={12} md={12} className="font-text px-5">
              <hr style={{height:'2px'}} />
                <p className="text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
                <p className="text-justify">
                  UGM secara konsisten dan sistematik sejak tahun pendiriannya 1949 berjuang bersama rakyat hingga akar rumput membangun dan menyejahterakan Indonesia. UGM terus mendorong peningkatan kuantitas dan kualitas pengabdian kepada masyarakat berbasis riset di Indonesia maupun di dunia Internasional dengan prinsip-prinsip pembangunan berkelanjutan. UGM secara bertahap membangun kepemimpinan pengabdian kepada masyarakat di dunia internasional, antara lain untuk mendesiminasikan nilai-nilai baik keindonesiaan dan kemanusiaan.
                </p>
                <p className="text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
              </Col>
          </Row>
        </div>
  );
};

export default CardHomeUniv;
