import React from 'react';
import visiMisi from '../../../assets/img/img-visimisi.jpeg'
import { Col, Row, } from 'reactstrap';

const CardVisi = () => {
  return (
    <div className='card-visi'>
      <Row>
        <Col xs="12" sm="12" md="12" className="font-bold font-big text-center">
          <img src={visiMisi} alt="Logo" className="img-visimisi" />
        </Col>
        <Col xs="12" sm="12" md="12" className='body-card-visi' >
          <Row className="text-visimisi">
            <Col xs={12} sm={12} md={6} lg={6} className="pt-2">
              Menjadikan HMTI sebagai organisasi akademik unggulan yang mampu meningkatkan kemampuan mahasiswa yang kreatif, inovatif dan berkarakter berbasis IMTAQ.
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="pt-2">
              <table>
                <tr>
                  <td className="d-flex px-4">1.</td>
                  <td>Menyelenggarakan dan meningkatkan pelatihan maupun lomba akademik yang dapat mengembangkan keahlian di bidang teknik informatika baik hard skill maupun soft skill.</td>
                </tr>
                <tr>
                  <td className="d-flex px-4">2.</td>
                  <td>Melakukan penelitian terhadap perkembangan teknologi yang berkaitan dengan Teknik Informatika.</td>
                </tr>
                <tr>
                  <td className="d-flex px-4">3.</td>
                  <td>Pengabdian kepada masyarakat dengan berkontribusi untuk meningkatkan pengetahuan dan pemanfaatan teknologi melalui penerapan keilmuan Teknik Informatika.</td>
                </tr>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardVisi;
