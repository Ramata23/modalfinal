import React from 'react'
import Dashboard1 from '../Modal/Dashboard 1.svg'

export default function Modal3() {
  return (
    <div>
      {/* <div className="modal-header"> */}
      {/* <h1>A</h1> */}
      {/* </div> */}
      <div className="modal-content">
        <div className="modal-body">
          <h3>Une recherche d'alternance simplifiée</h3>
          <p>Pourquoi ta recherche va-t-elle être plus simple ? <br></br> <br></br>
            <img className="dashboard1" src={Dashboard1} alt="" />
            <br></br>
            2. Tu as accès à un dashboard avec des données sur ton avancée, ainsi que des objectifs hebdomadaires. Pour cela, direction l’onglet “Mon dashboard” dans le menu de gauche.</p>
        </div>

      </div>
    </div>
  )
}
