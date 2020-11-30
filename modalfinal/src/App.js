import React, {useState} from 'react';
// import { Modal } from './components/Modal/Modal';
// import { Modal2 } from './components/Modal/Modal2';
import Modals from './components/Modal/Modals';
import Menu from './components/Modal/Menu'


function App() {
  const [show, setShow] = useState(true);
  // const [show2, setShow2] = useState(false);
  // const closeModalHandler = () => setShow(false);
  // const openModal = () => setShow2(true)
  // // setShow2(true);
  // console.log(show);
  // console.log(show2)

  const close = () => {
    setShow(false)
    console.log('lol');
  } 
  return (
    <div className="divmenu">
      <Menu />
      { show === true &&  <Modals close = {close} />}
    </div>
   
    // <div>
    //   { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
    //   { show2 ? <div onClick={closeModalHandler} className="back-drop"></div> : null}

    //   {/* <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button> */}
    //   { show ? <Modal show={show} close={closeModalHandler} openModal={openModal} /> : null }
    //   {show2 ? <Modal2 show2={show2}></Modal2> : null}
    //   {/* <Modal2 show={show} close={closeModalHandler} /> */}

    // </div>
  );
}

export default App;
