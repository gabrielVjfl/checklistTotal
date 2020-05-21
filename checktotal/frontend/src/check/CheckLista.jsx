import React from 'react'

import IconButton from '../template/IconButton'

export default props => {

const renderRows = () => {

    const list = props.list || []     // se veio das props coloca na constante se n o array
                                 // key, chave, identificador _id do mongo

    return  list.map(checklist => (
      
        <div key={checklist._id}> 


   
<div>


            <h2 id="tituloth">Titulo </h2>

            <p id="ptitulo" className={checklist.done ?  'classeConcluido ' :  ''}>{checklist.titulo}</p>

        

            <h2 id="descricaoth" >Descrição </h2>

             <p id="pdescription"   className={checklist.done ? 'classeConcluido' :   ''  }>{checklist.description}</p>

            </div>
         
             <div id="bt2">
<IconButton style="success" hide={checklist.done}  icon="check" onClick={() => props.marcarConcluido(checklist)}></IconButton>
           </div>
      
           

           <div id="bt3">
<IconButton style="warning"  hide={!checklist.done} icon="undo" onClick={() => props.marcarPendente(checklist)}></IconButton>
           </div>
           


           <div id='bt'>
        <IconButton  style="danger"  id="btdeletar" icon="trash-o"  onClick={() => props.handleRemove(checklist)}></IconButton>
           </div>
        




        <hr size="" color="black"></hr>

        </div>
        
    
    ))
        
    
}

   return (
       <div>
           <div className="card" id="card">
               <div className="card-body">
                 
                         {renderRows()}
                         
                   
               </div>
           </div>
       </div>
   )
}
