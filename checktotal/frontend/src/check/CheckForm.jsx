import React from 'react'
import IconButton from '../template/IconButton'


// handleChange e handleAdd é o valor q esta esperando na pasta check

// o value vai ser passado no check, description: e.target.value

export default props => {

    
const keyHandler = (e) => {
    if(e.key === 'Enter') { 
        e.shifKey ? props.handleSearch( ) : props.handleAdd( ) 

    } else if (e.key === 'Escape') {
        props.handleClear( ) 
    }
}

    return (
    <div role="form" className="checkForm">
        <div className="col-xs-12 col-sm-9 col-md-10">


    <label>Titulo :</label><input id="titulo" className="form-control" 
          onChange={props.handleChange2}   onKeyUp={keyHandler}   placeholder="Adicione ou  Busque por um titulo existente" required  value={props.titulo} ></input>
          

          <IconButton style="info" icon="search" id="btp" onClick={props.handleSearch}></IconButton>



<br></br>
<br></br>
    <label>Descrição :</label>


    <input  id="description" placeholder="ADICIONE OU BUSQUE UMA DESCRIÇÃO" className="form-control" value={props.description}
            onChange={props.handleChange} onKeyUp={keyHandler}  required></input>



   <IconButton style="info" id="btsearch2" icon="search" onClick={props.handleSearch2}></IconButton>
   


        </div>


        <div className="col-xs-12 col-sm-3 col-md-2" id="adicionar2">

       
                
        </div>
    </div>
    )
}
