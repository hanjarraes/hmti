import React, { useState, lazy } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Col,
  Row,
} from 'reactstrap';
import { loading, makeSocialBoxData, socialChartOpts } from './service'
import PopUp from '../../Component/Modal/PopUp'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const DetailHeader = ({}) => {
    const [state, setState] = useState({
        modalNotif: true,
        goPage: 1,
      });
    const [con, setCon] = useState(1)
  return (
    <div className="animated fadeIn">
        {/* <Row>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={loading()}>
              <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={loading()}>
              <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={loading()}>
              <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={loading()}>
              <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>
        </Row> */}
        <div>
            <PopUp state={state} setState={setState} con={con} setCon={setCon} />
        </div>
      </div>
  );
};

export default DetailHeader;
