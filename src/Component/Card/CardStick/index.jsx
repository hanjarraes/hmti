import React from 'react';
import { Card, CardBody, Col, Row, } from 'reactstrap';

const CardStick = () => {
  return (
        <Card className="radius-hard shadow-stick">
            <CardBody>
                <Row className="px-3 p-0">
                    <Col xs="4" sm="4" md="4" className="d-flex justify-content-center">
                        <div>
                            <i class="ri-file-list-3-line"/>
                            <div className="d-flex text-stick">
                                <div className="pr-2">16</div>
                                <div style={{color:"#B0B0B0"}}>Kegiatan Aktiv</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" className="d-flex justify-content-center">
                    <div>
                            <i class="ri-user-2-line"/>
                            <div className="d-flex text-stick">
                                <div className="pr-2">26</div>
                                <div style={{color:"#B0B0B0"}}>Anggota</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" className="d-flex justify-content-center">
                        <div>
                            <i class="ri-folder-chart-line"/>
                            <div className="d-flex text-stick">
                                <div className="pr-2">9</div>
                                <div style={{color:"#B0B0B0"}}>Repository</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
  );
};

export default CardStick;
