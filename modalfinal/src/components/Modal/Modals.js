import React, { useState } from 'react';
import './Modal.css';
import Bienvenue from './Bienvenue'
import { Modal2 } from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import Modal5 from './Modal5'
import Modal6 from './Modal6'
import Modal7 from './Modal7'
import hello from '../Modal/hello.png'
// import LogoHaut from '../Modal/Logo haut.svg'
// import Avatar from '../Modal/Avatar 2 1.svg'


// import Modal from './Modal';
const Modals = (props) => {
  const [step, setStep] = useState(0);
  const next = () => {
    setStep(step + 1)
  }

  const back = () => {
    setStep(step - 1)
  }
  
//  const close = () => {
//    setStep(false)
//  } 

  return (
    
    <div className="container">
   {/* <header className="header"> <img className="avatar" src={Avatar} alt="" />
   <img className="logohaut" src={LogoHaut} alt="" /> 

 </header> */}
      <div className="modal-header">
        <h1>Bienvenue ! <img className="hello" src={hello} alt="" /></h1> 

        <span onClick={props.close} className="close-modal-btn">X</span>
      </div>
      
      { step === 0 && <Bienvenue />}
      { step === 1 && <Modal2 />}
      { step === 2 && <Modal3 />}
      { step === 3 && <Modal4 />}
      { step === 4 && <Modal5 />}
      { step === 5 && <Modal6 />}
      { step === 6 && <Modal7 />}


      <div className='step'>
        <span onClick={() => setStep(0)} className={`${step === 0 && "active"}`}></span>
        <span onClick={() => setStep(1)} className={`${step === 1 && "active"}`}></span>
        <span onClick={() => setStep(2)} className={`${step === 2 && "active"}`}></span>
        <span onClick={() => setStep(3)} className={`${step === 3 && "active"}`}></span>
        <span onClick={() => setStep(4)} className={`${step === 4 && "active"}`}></span>
        <span onClick={() => setStep(5)} className={`${step === 5 && "active"}`}></span>
        <span onClick={() => setStep(6)} className={`${step === 6 && "active"}`}></span>

      </div>
      <br></br>
      <a href="#0" className="bar-anchor" >
      {step !== 0 && <span onClick={back} className="btn-back">Retour</span>}
        <div className="transition-bar"></div>
      </a>
      <a href="#0" className="bar-anchor" >
      {step < 6 && <span onClick={next} className="btn-next">Suivant</span>}
      {step > 5 && <span onClick={props.close} className="btn-next">Parfait, merci !</span>}
        <div className="transition-bar"></div>
      </a>

      {/* <a href="#0" class="bar-anchor" >
      <span onClick={props.close} className="btn-skip">Passer</span>
        <div class="transition-bar"></div>
      </a> */}


    </div>
    
  )
};

export default Modals