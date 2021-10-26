import React from 'react';
import { Col, Row, } from 'reactstrap';
import CardEvent from '../../Component/Card/CardEvent';
import { DataRepository } from '../Dashboard/service';
import Repository from '../../assets/img/Repository.png';
import '../Dashboard/index.scss';

const Dashboard = () => {
  return (
    <div className="animated fadeIn">
        <Row className="pb-5 margin-card-devisi" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <div style={{ color: "#FFEF00" }}>
            Repository
          </div>
          UNIVERSITAS IBNU SINA
        </Col>
      </Row>
      <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
         <img src={Repository} alt="Logo" className="w-100"/>
      </div>
      {/* Content */}
      <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
        <Col xs="12" sm="12" md="12" className="font-bold font-big ">
          REPOSITORY
        </Col>
      </Row>
      <div className="d-flex overflow-auto">
        {DataRepository.map((data, i) => {
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
