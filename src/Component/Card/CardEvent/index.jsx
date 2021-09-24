import React from 'react';
import {Col, Row, Card, CardBody } from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';
import event from '../../../assets/img/event.jpg'

const CardEvent = ({
  className
}) => {
  return (
      <div className={`${className} px-2 card-event`}>
          <Card className="p-0">
            <CardHeader className="p-0">
            <img src={event} alt="Logo" className="w-100"/>
            </CardHeader>
            <CardBody>
              <div>
                  <div className="pb-1 text-value">
                    AGAMA
                  </div>
                  <div className="text-justify font-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </div>
              </div>
            </CardBody>
          </Card>
      </div>
  );
};

export default CardEvent;
