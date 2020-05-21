import React from 'react'


export default props => (
    <div id="menu2">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <a className="navbar-brand" id="marca" href="#/check">
      <i className="fa fa-calendar-check-o"></i>
      Checklist-Total</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#/check" id="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="tarefas">Tarefas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id='sobre' href="#/about">Sobre</a>
        </li>
    </ul>
  </div>
</nav>
</div>
    
)