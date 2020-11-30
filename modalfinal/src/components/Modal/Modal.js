import React from 'react';
import './Modal.css';
const Modal = ({ show, close, closeModal, next, openModal }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <h1>Bienvenue !</h1> 
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h3>Bienvenue sur la plateforme MentorGoal !</h3>
          <p>Elle a pour but de t’aider à décrocher ton alternance rapidement par le suivi de tes candidatures, des challenges et par l’accès à une communauté d’étudiants. <br></br> <br></br>C’est parti ! <br></br> <br></br>Voici quelques étapes pour bien commencer !</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
      
        </div>
        <div className="modal-footer">
          <button onClick={() => {close(); openModal()} } className="btn-next">Next</button>
      
        </div>
      </div>
    </div>
  )
};
export default Modal;