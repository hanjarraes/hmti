import React from 'react';
import {Col, Row, Card, CardBody, Button } from 'reactstrap';
import PetaHmti from '../../PetaHmti'
import logo from '../../../assets/img/hmti.png'

const CardTemukan = () => {
  return (
        <div>
          <Row className="pl-5 pb-3 pr-5">
            <Col xs={12} sm={12} md={12} lg={12} className="font-bold font-big" data-aos="zoom-in" data-aos-anchor-placement="top-top">TEMUKAN KAMI</Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} className="font-bold font-big px-5" data-aos="fade-up-right" data-aos-anchor-placement="top-top">
              <Card>
                  <CardBody>
                      <PetaHmti/>
                  </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="px-5" data-aos="fade-up-left" data-aos-anchor-placement="top-top">
              <Card>
                  <CardBody>
                      <Col xs={12} sm={12} md={12} lg={12} className="pb-3 pt-3">
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12}>
                            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                              <img src={logo} alt="Logo" className="img-circle img-responsive"></img>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={12}>
                              <div className="font-bold pb-4 pt-4 font-tube">
                                HMTI Universitas Ibnu Sina
                              </div>
                              <div className="font-bold">
                                <Button size="lg" href="https://www.youtube.com/channel/UCTrsXP3KqWdXPyhv4PI8nOg" className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-youtube"></i><span>YouTube</span></Button>
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} >
                        <iframe className="video-hmti" src="https://www.youtube.com/embed/R-w9q3vqoTk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </Col>
                  </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
  );
};

export default CardTemukan;
