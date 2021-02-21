import React, { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap'
import { closeModal } from './service'
import "./index.scss";


class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render = () => {
        const { state, setState, con, setCon } = this.props
        const newstate = { ...state }
        console.log(con)
        return (
          <Modal
            isOpen={newstate.modalNotif}
            centered            
            onOpened={() => newstate.modalNotif}
            contentClassName="modal-content-paging box-er-pagination"
            closeOnBackdrop={false}
          >
            <ModalBody>
              {/* <div 
                className="text-right px-0" 
                style={{ fontSize: '14px' }} 
                onClick={() => closeModal({ state, setState })}
              >
                X
              </div> */}
              {con == '1' ? (
              <div>
                <div className="d-flex d-inline-flex">
                  <div className="pl-3 font">
                    Apakah muka anda seperti Monyet <i class="em em-monkey_face" aria-role="presentation" aria-label="MONKEY FACE"></i>
                  </div>
                </div>
                <div className="d-flex d-inline-flex">
                  <Button block color="secondary m-1" onClick={() => setCon(2)}>Iya</Button>
                  <Button block color="success m-1" onClick={() => setCon(2)}>Jelas</Button>
                </div>
              </div>
              ) : ''}
              {con == '2' ? (
              <div>
                <div className="d-flex d-inline-flex">
                  <div className="pl-3 font">
                    kalau begitu boleh kah saya mangil anda monyet <i class="em em-speak_no_evil" aria-role="presentation" aria-label="SPEAK-NO-EVIL MONKEY"></i>
                  </div>
                </div>
                <div className="d-flex d-inline-flex">
                  <Button block color="secondary m-1" onClick={() => setCon(3)}>Boleh</Button>
                  <Button block color="success m-1" onClick={() => setCon(3)}>Yoii</Button>
                </div>
              </div>
              ) : ''}
               {con == '3' ? (
                <div>
                 <div className="d-flex d-inline-flex">
                   <div className="pl-3 font">
                      Selamat datang Monyet<i class="em em-speak_no_evil" aria-role="presentation" aria-label="SPEAK-NO-EVIL MONKEY"></i>
                   </div>
                 </div>
                 <div className="d-flex d-inline-flex">
                   <Button block color="success m-1" onClick={() => closeModal({ state, setState })} >Wokeh</Button>
                 </div>
               </div>
              ) : ''}
            </ModalBody>
          </Modal>

        );
    }
}

export default PopUp;