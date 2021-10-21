import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';

const CardDevisi = ({
  className,
  iconDevisi,
  nameDevisi,
  descDevisi,
  styleIcon,
}) => {
  return (
    <div style={{ minWidth: "30%", maxWidth: "30%" }} className={`${className} px-3 card-devisi`} >
      <Card className="card-devisi-body">
        <CardBody>
          <div className={`mx-3 icon-card me-5 ${styleIcon}`} style={{ maxWidth: "fit-content" }}>
            <i className={iconDevisi} />
          </div>
          <div className="py-3 devisi-card">{nameDevisi}</div>
          <div className="font-text text-justify overflow-auto desc-card" style={{ maxHeight: "220px" }}>{descDevisi}</div>
        </CardBody>
        {/* <div className="font-text text-justify pl-3 pb-3 baca-card">
          Baca Selengkapnya
        </div> */}
      </Card>
    </div>
  );
};

export default CardDevisi;
