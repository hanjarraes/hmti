import React from 'react';
import {Col, Row, Card, CardBody } from 'reactstrap';
import logo from '../../../assets/img/hmti.png'

const CardDevisi = () => {
  return (
        <div>
          <Row className="pb-5" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">  DEVISI HMTI <br/> UNIVERSITAS IBNU SINA</Col>
          </Row>
          <Row className="px-5" data-aos="fade-up-right" data-aos-anchor-placement="center-bottom">
              <Col xs={12} sm={12} md={6} lg={3} >
                <Card>
                  <CardBody>
                    <Row className="text-center">
                        <Col xs={12} sm={12} md={12} className="font-bold font-3xl">
                          Penelitian Dan pengembangan
                       </Col>
                       <Col xs={12} sm={12} md={12}>
                          <img src={logo} alt="Logo" className="pt-5 pb-5 img-responsive"></img>
                       </Col>
                       <Col xs={12} sm={12} md={12} className="font-text text-justify">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                       </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} data-aos="fade-up-right" data-aos-anchor-placement="center-bottom">
                  <Card>
                    <CardBody>
                      <Row className="text-center">
                          <Col xs={12} sm={12} md={12} className="font-bold font-3xl">
                            Program
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <img src={logo} alt="Logo" className="pt-5 pb-5 img-responsive"></img>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="font-text text-justify">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} data-aos="fade-up-right" data-aos-anchor-placement="center-bottom">
                  <Card>
                    <CardBody>
                      <Row className="text-center">
                          <Col xs={12} sm={12} md={12} className="font-bold font-3xl">
                            Media
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <img src={logo} alt="Logo" className="pt-5 pb-5 img-responsive"></img>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="font-text text-justify">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} data-aos="fade-up-right" data-aos-anchor-placement="center-bottom">
                  <Card>
                    <CardBody>
                      <Row className="text-center">
                          <Col xs={12} sm={12} md={12} className="font-bold font-3xl">
                            Humas
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <img src={logo} alt="Logo" className="pt-5 pb-5"></img>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="font-text text-justify">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
              </Col>
          </Row>
        </div>
  );
};

export default CardDevisi;
