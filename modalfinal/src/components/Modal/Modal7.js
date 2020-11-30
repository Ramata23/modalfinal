import React from 'react'
import Interview1 from '../Modal/Interview 1.svg'

export default function Modal6() {
    return (
        <div>
        {/* <div className="modal-header"> */}
            {/* <h1>A</h1> */}
        {/* </div> */}
        <div className="modal-content">
          <div className="modal-body">
            <h3>Une recherche d'alternance simplifiée</h3>
            <p>Pourquoi ta recherche va-t-elle être plus simple ? <br></br> <br></br>
            <img className="interview1" src={Interview1} alt="" />
            <br></br>
            6. Pour terminer (merci si tu as suivi le tuto jusqu’au bout !), tu as aussi accès à un onglet qui t’emmène directement sur Jobteaser, et un bouton qui te permet de réserver une simulation d’entretien si tu souhaites t’entraîner et te prépaprer à un entretien.</p>
          </div>
         
        </div>
      </div>
    )
}
