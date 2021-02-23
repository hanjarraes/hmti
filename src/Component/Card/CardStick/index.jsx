import React from 'react';
import { Card, CardBody, Col, Row, } from 'reactstrap';
import logo from '../../../assets/img/hmti.png'

const CardStick = () => {
  return (
        <Card className="radius-hard">
            <CardBody>
                <Row className="px-3 p-0">
                <Col xs="4" sm="4" md="4" className="align-items-center d-flex">
                    <img src={logo} alt="Logo" className="logo-agenda"></img>
                    <div className="pl-3">
                    <div className="align-items-center d-flex font-bold font-big">16</div>
                    <div className="font-bold font-medium">Kegiatan Aktiv</div>
                    </div>
                </Col>
                <Col xs="4" sm="4" md="4" className="align-items-center d-flex">
                    <img src={logo} alt="Logo" className="logo-agenda"></img>
                    <div className="pl-3">
                    <div className="align-items-center d-flex font-bold font-big">22</div>
                    <div className="font-bold font-medium">Anggota Aktiv</div>
                    </div>
                </Col>
                <Col xs="4" sm="4" md="4" className="align-items-center d-flex">
                    <img src={logo} alt="Logo" className="logo-agenda"></img>
                    <div className="pl-3">
                    <div className="align-items-center d-flex font-bold font-big">28</div>
                    <div className="font-bold font-medium">Repository</div>
                    </div>
                </Col>
                </Row>
            </CardBody>
        </Card>
  );
};

export default CardStick;
