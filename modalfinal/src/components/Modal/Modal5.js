import React from 'react'
import Challenge5 from '../Modal/Challenge 5.svg'

export default function Modal5() {
    return (
        <div>
        {/* <div className="modal-header"> */}
            {/* <h1>A</h1> */}
        {/* </div> */}
        <div className="modal-content">
          <div className="modal-body">
            <h3>Une recherche d'alternance simplifiée</h3>
            <p>Pourquoi ta recherche va-t-elle être plus simple ? <br></br> <br></br>
            <img className="challenge5" src={Challenge5} alt="" />
            <br></br>
            4. Aussi, nous te proposons de participer à des challenges qui boosteront ton efficacité ! Surpasse-toi en réalisant nos challenges : réaliser un CV percutant, rédiger une superbe lettre de motivation, ... Notre équipe te fera ensuite un feedback pour t’aider à t’améliorer.</p>
          </div>
         
        </div>
      </div>
    )
}
