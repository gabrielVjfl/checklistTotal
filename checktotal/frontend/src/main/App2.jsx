import React from 'react'

import Menu from '../template/Menu'
import Routes from './Routes' /* Pega o about e check que esta nas rotas */


export default props => (
    <div className="container">
       <Menu></Menu>

       <br></br>

        <Routes></Routes>
        
      </div>
)