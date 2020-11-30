import React from 'react';
import './Modal.css';
import Profil1 from '../Modal/Profil 1.svg'

export const Modal2 = ({ show2, close }) => {
  return (
    // <div className="modal-wrapper"
    //   style={{
    //     transform: show2 ? 'translateY(0vh)' : 'translateY(-100vh)',
    //     opacity: show2 ? '1' : '0'
    //   }}
    // >
<div>
      {/* <div className="modal-header"> */}
          {/* <h1>A</h1> */}
        {/* <span onClick={close} className="close-modal-btn">x</span> */}
      {/* </div> */}
      <div className="modal-content">
        <div className="modal-body">
          <h3>Une recherche d'alternance simplifiée</h3>
          <p>Pourquoi ta recherche va-t-elle être plus simple ? <br></br> <br></br>
          <img className="profil1" src={Profil1} alt=""/>
          <br></br>1. Tu bénéficies d’un profil où tu pourras centraliser tes coordonnées et tous les documents utiles à ta recherche. Pour y accéder, clique sur l’avatar en haut à droite, puis sur “Mon profil”.</p>
        </div>
        {/* <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        
        </div> */}
      </div>
    </div>
  )
};