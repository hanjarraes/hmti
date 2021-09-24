import React, { useState } from 'react';
import { Col, Row, } from 'reactstrap';
import CardStick from '../../Component/Card/CardStick';
import CardStruktur from '../../Component/Card/CardStruktur';
import CardVisi from '../../Component/Card/CardVisi';
import CardBerita from '../../Component/Card/CardBerita';
import CardDevisi from '../../Component/Card/CardDevisi';
import CardEvent from '../../Component/Card/CardEvent';
import Video from '../../assets/video/OpeningHMTI.mp4';
import './index.scss';

const Dashboard = ({ }) => {
  const [state, setState] = useState({
    modalNotif: false,
    goPage: 1,
    activeIndex: 0,
  });
  const [con, setCon] = useState(2)
  return (
    <div className="animated fadeIn">
      <video className="video-player" autoPlay loop muted>
        <source src={Video} />
      </video>
      <Row className="card-stick pb-5" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <Col xs={1} sm={1} md={1} />
        <Col xs={10} sm={10} md={10}> <CardStick /> </Col>
        <Col xs={1} sm={1} md={1} />
      </Row>
      {/* Content */}
      <CardBerita />
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            DEVISI HMTI
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <CardVisi />
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            DEVISI HMTI
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div className="d-flex justify-content-around">
        <CardDevisi nameDevisi={'Agama'} />
        <CardDevisi nameDevisi={'Litbang'} />
        <CardDevisi nameDevisi={'Program'} />
      </div>
      <div className="d-flex justify-content-center">
        <CardDevisi className={'mr-5'} nameDevisi={'Media'} />
        <CardDevisi nameDevisi={'Humas'} />
      </div>
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            STRUKTUR
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div className="d-flex justify-content-around">
        <CardStruktur nama={'YUDI'} jabatan={'Ketua HMTI 2021/2022'} />
        <CardStruktur nama={'CHOIRUL'} jabatan={'Wakil Ketua HMTI 2021/2022'} />
        <CardStruktur nama={'PANJI'} jabatan={'sekjen HMTI 2021/2022'} />
        <CardStruktur nama={'REFICHA'} jabatan={'Seketaris HMTI 2021/2022'} />
      </div>
      <div className="d-flex justify-content-around">
        <CardStruktur nama={'AFIFAH'} jabatan={'Bendahara HMTI 2021/2022'} />
        <CardStruktur nama={'FADLI'} jabatan={'KOOR Agama HMTI 2021/2022'} />
        <CardStruktur nama={'ALIF'} jabatan={'KOOR Litbang HMTI 2021/2022'} />
        <CardStruktur nama={'Hanjarraes'} jabatan={'KOOR Program HMTI 2021/2022'} />
      </div>
      <div className="d-flex justify-content-center">
        <CardStruktur nama={'RHAMADHAN'} jabatan={'KOOR Media HMTI 2021/2022'} />
        <CardStruktur nama={'ANGGA'} jabatan={'KOOR Humas HMTI 2021/2022'} />
      </div>
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big ">
          EVENT AKAN DATANG
        </Col>
      </Row>
      <div style={{ overflowX: "auto", }} className="d-flex justify-content-center">
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </div>
    </div>
  );
};

export default Dashboard;
