import React from 'react'
// import { Navbar } from 'react-bootstrap';

export default function Menu() {
    return (
        <div className="menu">
          
            {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    
    
  </Navbar> */}
  <br/>
  
        <aside>
<ul>
<li><div className="icons"></div><div className="linktitle">Mon dashboard</div></li>
<li><div className="icons"></div><div className="linktitle">Mes candidatures</div></li>
<li><div className="icons"></div><div className="linktitle">Mes challenges</div></li>
<li><div className="icons"></div><div className="linktitle">Communauté</div></li>
<li><div className="icons"></div><div className="linktitle">Jobteaser</div></li>
<button type="submit">Réserver une simulation d'entretien</button>
</ul>
</aside>
<footer>Mentor Goal</footer>
        </div>
    )
}

