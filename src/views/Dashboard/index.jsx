import React, { useState } from 'react';
import { Col, Row, } from 'reactstrap';
import CardStick from '../../Component/Card/CardStick';
import CardStruktur from '../../Component/Card/CardStruktur';
import CardVisi from '../../Component/Card/CardVisi';
import CardBerita from '../../Component/Card/CardBerita';
import CardDevisi from '../../Component/Card/CardDevisi';
import CardEvent from '../../Component/Card/CardEvent';
import Video from '../../assets/video/OpeningHMTI.mp4';
import { dataDevisi, dataEvent, dataStuktur } from './service'
import './index.scss';

const Dashboard = () => {
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
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big ">
          KEGIATAN TERBARU
        </Col>
      </Row>
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
      <div className="d-flex overflow-auto">
        {dataDevisi.map((data, i) => {
          return (
            <CardDevisi
              iconDevisi={data.icon}
              nameDevisi={data.header}
              descDevisi={data.desc}
              styleIcon={data.style}
            />
          )
        }
        )
        }
      </div>


      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            STRUKTUR
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div className="d-flex  overflow-auto pb-5">
        {dataStuktur.map((data, i) => {
          return (
            <CardStruktur
              pictureStruktur={data.picture}
              nameStrukturt={data.Name}
              descStruktur={data.Jabatan}
            />
          )
        }
        )
        }
      </div>


      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big ">
          EVENT AKAN DATANG
        </Col>
      </Row>
      <div className="d-flex overflow-auto">
        {dataEvent.map((data, i) => {
          return (
            <CardEvent
              pictureEvent={data.picture}
              nameEvent={data.header}
              descEvent={data.desc}
            />
          )
        }
        )
        }
      </div>
    </div>
  );
};

export default Dashboard;
