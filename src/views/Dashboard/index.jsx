import React, { useState} from 'react';
import { Col, Row, Card, CardBody,  Button,  } from 'reactstrap';
import PopUp from '../../Component/Modal/PopUp';
import CardStick from '../../Component/Card/CardStick';
import CardVisiMisi from '../../Component/Card/CardVisiMisi';
import CardHomeUniv from '../../Component/Card/CardHomeUniv';
import CardBerita from '../../Component/Card/CardBerita';
import CardDevisi from '../../Component/Card/CardDevisi';
import CardStruktur from '../../Component/Card/CardStruktur';
import CardTemukan from '../../Component/Card/CardTemukan';
import Video from '../../assets/video/tes1.mp4';
import logo from '../../assets/img/hmti.png'
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
          <Row data-aos="fade-Up" data-aos-duration="1500">
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
          <Row className="card-stick pb-5" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Col xs={1} sm={1} md={1} />
            <Col xs={10} sm={10} md={10}> <CardStick /> </Col>
            <Col xs={1} sm={1} md={1} />
          </Row>
          {/* Content */}

          <CardBerita />
          <CardHomeUniv />    
          <CardVisiMisi/>
          <CardDevisi />

          <hr style={{height:'2px'}} />

          <CardStruktur />
        
          <hr style={{height:'2px'}} />

          <CardTemukan />
          
        <div>
            <PopUp state={state} setState={setState} con={con} setCon={setCon} />
        </div>
      </div>
  );
};

export default DetailHeader;
