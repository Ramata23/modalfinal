import React from 'react'
import Tableau1 from '../Modal/Tableau 1.svg'

export default function Modal4() {
    return (
        <div>
        {/* <div className="modal-header"> */}
            {/* <h1>A</h1> */}
        {/* </div> */}
        <div className="modal-content">
          <div className="modal-body">
            <h3>Une recherche d'alternance simplifiée</h3>
            <p>Pourquoi ta recherche va-t-elle être plus simple ? <br></br> <br></br>
            <img className="tableau1" src={Tableau1} alt="" />
            <br></br>
            3. Tu disposes également d’un tableau de suivi dans lequel tu pourras ajouter des candidatures, indiquer lorsque tu as postulé, relancé, obtenu un entretien, etc. <br></br> Ce suivi est très important car il te permet d’être plus efficace dans ta recherche. Cela se passe dans l’onglet “Mes candidatures”.</p>
          </div>
         
        </div>
      </div>
    )
}
