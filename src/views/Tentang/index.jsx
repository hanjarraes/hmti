import React from 'react';
import { Col, Row, } from 'reactstrap';
import CardStick from '../../Component/Card/CardStick';
import CardStruktur from '../../Component/Card/CardStruktur';
import CardVisi from '../../Component/Card/CardVisi';
import CardBerita from '../../Component/Card/CardBerita';
import CardDevisi from '../../Component/Card/CardDevisi';
import Video from '../../assets/video/OpeningHMTI.mp4';
import { dataDevisi,  dataStuktur } from '../Dashboard/service'
import '../Dashboard/index.scss';

const Dashboard = () => {
  return (
    <div className="animated fadeIn">
      {/* Content */}
      <Row className="pb-5 card-visi-misi" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            TENTANG HMTI
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <CardBerita />


      <Row className="pb-5 card-visi-misi" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            DEVISI HMTI
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <CardVisi />


      <Row className="pb-5 margin-card-devisi" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
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
    </div>
  );
};

export default Dashboard;
