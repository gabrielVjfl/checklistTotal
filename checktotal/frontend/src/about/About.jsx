import React from 'react'
import PageHeader from '../template/PageHeader'

import Img from '../template/img.jpg' // importa a imagem

export default props => (
    <div>
        <PageHeader name="Sobre" small="Nós"></PageHeader>

         <img id="img" src={Img} width="200px" height="200px"></img>

        <h2>Nossa Historia</h2>
        <p>App para ajuda de criação de checklists</p>
        <p>Nossa Visão</p>
        <p>Floripa sc brasil</p>
    </div>
)