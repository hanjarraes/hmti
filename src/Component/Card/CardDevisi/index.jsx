import React from 'react';
import {Col, Row, Card, CardBody } from 'reactstrap';

const CardDevisi = ({
  className
}) => {
  return (
      <div style={{width:"30%"}} className={className}>
          <Card className="card-devisi-body">
            <CardBody className="d-flex justify-content-between flex-column">
              <Row className="text-center">
                  <Col xs={12} sm={3} md={3} className="mx-3 icon-agama">
                      <i className="ri-camera-3-line"/>
                  </Col>
                  <Col xs={12} sm={12} md={12} className="py-3 devisi-card">
                    AGAMA
                  </Col>
                  <Col xs={12} sm={12} md={12} className="font-text text-justify">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </Col>
              </Row>
              <div className="font-text text-justify">
                Baca Selengkapnya
              </div>
            </CardBody>
          </Card>
      </div>
  );
};

export default CardDevisi;
