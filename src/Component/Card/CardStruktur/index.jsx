import React from 'react';
import {Col, Row, } from 'reactstrap';
import foto from '../../../assets/img/foto.jpg'

const CardStruktur = ({
  className,
  nama,
  jabatan,
}) => {
  return (
    <div className={`${className}`} style={{marginBottom:"80px"}}>
      <div>
        <img src={foto} alt="Logo" />
      </div>
    <div className="px-3 py-2 card-struktur">
      <div style={{fontWeight:"700", fontSize:"1.5rem"}}>{nama}</div>
      <div>{jabatan}</div>
    </div>
</div>
  );
};

export default CardStruktur;
