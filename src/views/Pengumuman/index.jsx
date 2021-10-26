import React from 'react';
import { Col, Row, } from 'reactstrap';
import CardEvent from '../../Component/Card/CardEvent';
import { dataEvent} from '../Dashboard/service'
import imgPengumuman from '../../assets/img/pengumuman-Hmti.png'
import '../Dashboard/index.scss';

const Dashboard = () => {
  return (
    <div className="animated fadeIn">
      <Row className="pb-5 margin-card-devisi" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            PENGUMUMAN HMTI
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
         <img src={imgPengumuman} alt="Logo" className="w-100"/>
      </div>

      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big ">
          KEGIATAN TERBARU
        </Col>
      </Row>
      <div className="d-flex overflow-auto">
        {dataEvent.map((data, i) => {
          return (
            <CardEvent
              pictureEvent={data.picture}
              nameEvent={data.header}
              descEvent={data.desc}
              dateEvent={data.date}
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
              dateEvent={data.date}
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
