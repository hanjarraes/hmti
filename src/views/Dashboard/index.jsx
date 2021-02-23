import React, { useState} from 'react';
import { Card, CardBody, Col, Row, } from 'reactstrap';
import logo from '../../assets/img/hmti.png'
import PopUp from '../../Component/Modal/PopUp';
import CardStick from '../../Component/Card/CardStick';
import Video from '../../assets/video/tes1.mp4';
import './index.scss';

const DetailHeader = ({}) => {
    const [state, setState] = useState({
        modalNotif: false,
        goPage: 1,
        activeIndex: 0,
      });
    const [con, setCon] = useState(1)
  return (
    <div className="animated fadeIn">
        <video className="video-player" autoPlay loop muted>
          <source src={Video } />
        </video>
          <Row>
            <Col xs="12" sm="12" md="12" className="card-logo">
                <div>
                    <img src={logo} alt="Logo" className="branda-logo"></img>
                </div>
                <div className="branda-text pt-5">
                    HIMPUNAN MAHASISWA TEKNIK INFORMATIKA 
                    <br />
                    UNIVERSITAS IBNU SINA BATAM
                </div>
              </Col>
          </Row>
          <Row className="card-stick pb-5">
            <Col xs={1} sm={1} md={1} />
            <Col xs={10} sm={10} md={10}> <CardStick /> </Col>
            <Col xs={1} sm={1} md={1} />
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">  HMTI UNIVERSITAS IBNU SINA </Col>
          </Row>
          <Row className="px-5">
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
          <Row className="d-flex px-5">
              <Col xs={12} sm={12} md={6} style={{color:'#9e9e9e'}} className="px-5">
                <div className="font-bold font-big">
                VISI HMTI <br/>UNIVERSITAS IBNU SINA 
                </div>
              <hr style={{height:'2px'}} />
                <p className="font-text text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
                <p className="font-text text-justify">
                  UGM secara konsisten dan sistematik sejak tahun pendiriannya 1949 berjuang bersama rakyat hingga akar rumput membangun dan menyejahterakan Indonesia. UGM terus mendorong peningkatan kuantitas dan kualitas pengabdian kepada masyarakat berbasis riset di Indonesia maupun di dunia Internasional dengan prinsip-prinsip pembangunan berkelanjutan. UGM secara bertahap membangun kepemimpinan pengabdian kepada masyarakat di dunia internasional, antara lain untuk mendesiminasikan nilai-nilai baik keindonesiaan dan kemanusiaan.
                </p>
                <p className="font-text text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} className="px-5 pt-3">
                <iframe src="https://www.youtube.com/embed/pXRviuL6vMY" className="content-size" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
          </Row>
          <Row className="d-flex px-5">
              <Col xs={12} sm={12} md={6} className="px-5 pt-3">
                <iframe src="https://www.youtube.com/embed/YRNyamyBOIQ" className="content-size" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col xs={12} sm={12} md={6} style={{color:'#9e9e9e'}} className="px-5">
                <div className="font-bold font-big">
                VISI HMTI <br/>UNIVERSITAS IBNU SINA 
                </div>
              <hr style={{height:'2px'}} />
                <p className="font-text text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
                <p className="font-text text-justify">
                  UGM secara konsisten dan sistematik sejak tahun pendiriannya 1949 berjuang bersama rakyat hingga akar rumput membangun dan menyejahterakan Indonesia. UGM terus mendorong peningkatan kuantitas dan kualitas pengabdian kepada masyarakat berbasis riset di Indonesia maupun di dunia Internasional dengan prinsip-prinsip pembangunan berkelanjutan. UGM secara bertahap membangun kepemimpinan pengabdian kepada masyarakat di dunia internasional, antara lain untuk mendesiminasikan nilai-nilai baik keindonesiaan dan kemanusiaan.
                </p>
                <p className="font-text text-justify">
                  Sebagai Universitas Riset Berkelas Dunia, Universitas Gadjah Mada memberikan perhatian khusus terhadap kegiatan-kegiatan penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan mengembangkan berbagai penelitian yang berorientasi untuk memenuhi kebutuhan bangsa.
                </p>
              </Col>
          </Row>
        <div>
            <PopUp state={state} setState={setState} con={con} setCon={setCon} />
        </div>
      </div>
  );
};

export default DetailHeader;
