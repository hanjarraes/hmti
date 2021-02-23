import React, { useState} from 'react';
import { Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import logo from '../../assets/img/hmti.png'
import PopUp from '../../Component/Modal/PopUp';
import Video from '../../assets/video/tes1.mp4';
import './index.scss';

const DetailHeader = ({}) => {
    const [state, setState] = useState({
        modalNotif: false,
        goPage: 1,
        activeIndex: 0,
      });
    const [con, setCon] = useState(1)
  return (
    <div className="animated fadeIn">
        <video className="video-player" autoPlay loop muted>
          <source src={Video } />
        </video>
        <Row>
          <Col xs="12" sm="12" md="12" className="card-logo">
            <div>
                <img src={logo} alt="Logo" className="branda-logo"></img>
            </div>
            <div className="branda-text pt-5">
                HIMPUNAN MAHASISWA TEKNIK INFORMATIKA 
                <br />
                UNIVERSITAS IBNU SINA BATAM
            </div>
            </Col>
          </Row>
        <div>
            <PopUp state={state} setState={setState} con={con} setCon={setCon} />
        </div>
      </div>
  );
};

export default DetailHeader;
