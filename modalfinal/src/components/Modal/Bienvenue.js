import React from 'react'
import clindoeil from '../Modal/clindoeil.png'

export default function Bienvenue() {
    return (
        <div>
      <div className="modal-content">  
        <div className="modal-body">
          <h3>Bienvenue sur la plateforme MentorGoal !</h3>            
          <p>Elle a pour but de t’aider à décrocher ton alternance rapidement par le suivi de tes candidatures, des challenges et par l’accès à une communauté d’étudiants. <br></br> <br></br>C’est parti ! <br></br> <br></br>Voici quelques étapes pour bien commencer ! <img className="clin" src={clindoeil} alt=""/></p>
        </div>
        </div>
        </div>
    )
}
