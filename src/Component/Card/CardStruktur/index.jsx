import React from 'react';
import { Col, Row, } from 'reactstrap';
import foto from '../../../assets/img/foto.jpg'

const CardStruktur = ({
  className,
  pictureStruktur,
  nameStrukturt,
  descStruktur,
}) => {
  return (
    <div className={`${className} px-2`}>
      <div>
        <img src={pictureStruktur} alt="Logo" className='img-card-srtruktur' />
      </div>
      <div className="px-3 py-2 card-struktur">
        <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>{nameStrukturt}</div>
        <div>{descStruktur}</div>
      </div>
    </div>
  );
};

export default CardStruktur;
