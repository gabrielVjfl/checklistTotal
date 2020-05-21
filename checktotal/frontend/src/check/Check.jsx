import React, {Component} from 'react'
import axios from 'axios'
import PageHeader from '../template/PageHeader'
import CheckForm from './CheckForm'
import CheckLista from './CheckLista'
import IconButton from '../template/IconButton'


// Conectar com o Backend!
const URL = 'http://localhost:3003/api/check' 


export default class Check extends Component  {
  
  constructor(props)  {
    super(props)

    // Não precisa pois ja esta em arrow function
// this.handleRemove = this.handleRemove.bind(this)
// this.handleAdd = this.handleAdd.bind(this)

// this.marcarConcluido = this.marcarConcluido.bind(this)
//this.marcarPendente = this.marcarPendente.bind(this)

  

  }


 

  state = {

    titulo:  ' ',
    description: ' ', // por enquanto n tem nada!
     list: [],
    
     
    
 }

 componentDidMount() {
         this.refresh()
              this.refresh2()
                  this.refresh3()
                      this.refresh4()
                     
 }

// adicionar, POST
  handleAdd = () => {

    const description = this.state.description

    const titulo = this.state.titulo

    axios.post(URL, {description, titulo}) // Vai postar no backend a descrição

    .then(resposta => this.refresh()) // quando adiciona vai para a lista, atualiza
    
    .then(resposta => this.refresh2())

  }

// eventos no input
  handleChange = (e) => {
  // ...this.state => pega todos os estados, se for só um é this.state.description
    this.setState({description:    this.state.description =    e.target.value}) // evento no valor do input na descrição
   
  }

  handleChange2 = (e) => {
    this.setState({titulo:   this.state.titulo   =    e.target.value}) 
  }

  
  // Ordena postagens mais antigas
  refresh = (titulo = '') => { // pega a lista mais atualizada 
    
// Node restful filtros
const search = titulo ? `&titulo__regex=/${titulo}/ ` : ''

  axios.get(`${URL}?sort=-createdAt${search}`) // o Sort pega o mais a postagem mais recente

    .then(response => this.setState({...this.state,  description: '' ,   titulo,     list: response.data})) // lista pega os dados do axios
  }

//  Busca
  handleSearch = () => {
    this.refresh(this.state.titulo)
    this.refresh2(this.state.titulo)
  }

  handleSearch2 = () => {
    this.refresh3(this.state.description)
    this.refresh4(this.state.description)
  }


  // Ordenar por mais recentes
  refresh2 = (titulo = '') => {

    const search = titulo ? `&titulo__regex=/${titulo}/ `  : ''
   

    axios.get(`${URL}?sort=-_id${search}`)
   

    .then(response => this.setState({...this.state,   description: '', titulo  , list: response.data}))
  }


  refresh3 = (description = '') => {

    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-_id${search}`)
    .then(response => this.setState({...this.state, description, titulo: '', list: response.data}))

  }

  refresh4 = (description = '') => {
    
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-createdAt${search}`)
    .then(response => this.setState({...this.state, description, titulo: '', list: response.data}))
  }
  


  // remover delete
  handleRemove = (checklist) =>  {

    axios.delete(`${URL}/${checklist._id}`)

    .then(response => this.refresh(this.state.titulo, this.state.description))
    .then(response => this.refresh2(this.state.titulo))
    .then(response => this.refresh3(this.state.description))
    .then(response => this.refresh4(this.state.description))  // chama a função refresh para mostrar tudo
            
  }

  // Put e Delete sempre passa o _id
// Put - atualizar, done(boolena) para true
  marcarConcluido = (checklist) => {    // ... pega todos os atributos
       axios.put(`${URL}/${checklist._id}`, {...checklist,  done:  true}) // done vai ser verdadeiro

                   .then(response => this.refresh(this.state.titulo, this.state.description)) // permanece o estado do titulo
                  .then(response => this.refresh2(this.state.titulo, this.state.description))
                  .then(response => this.refresh3(this.state.description, this.state.titulo))
                  .then(response => this.refresh4(this.state.description, this.state.titulo))
  }

  marcarPendente = (checklist) => {
        axios.put(`${URL}/${checklist._id}`, {...checklist, done: false})

        .then(response => this.refresh(this.state.titulo, this.state.description))
            .then(response => this.refresh2(this.state.titulo, this.state.description))
            .then(response => this.refresh3(this.state.description, this.state.titulo))
            .then(response => this.refresh4(this.state.description, this.state.titulo))
          
  }

  handleClear = () => {
    this.refresh()
    this.refresh()
  }

  

  // handleAdd => botão salvar onclick

  // handleChange => pegar valor do input


render() {
   return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <hr size="8" color='black'>

        </hr>

       
        <CheckForm handleChange={this.handleChange}  
          description={this.state.description} handleChange2={this.handleChange2} handleAdd={this.handleAdd}
           titulo={this.state.titulo} handleClear={this.handleClear}  
           handleSearch={this.handleSearch}  handleSearch2={this.handleSearch2}></CheckForm>
<br></br>

<button id="btantigas" className="btn btn-primary" onClick={() => this.refresh()}>Mais Antigas</button>

<button  id="btnovas" className="btn btn-warning" onClick={() => this.refresh2()}> Mais Recentes</button>

<button className="btn btn-primary" id="btnsalvar" onClick={() => this.handleAdd()}>Adicionar <font size="6">+</font></button>


<button className="btn btn-default" id="btnclear" onClick={() => this.handleClear()}>X</button>
  


        <CheckLista    list={this.state.list}      handleRemove={this.handleRemove}  marcarConcluido={this.marcarConcluido} 
          marcarPendente={this.marcarPendente}></CheckLista>

          </div>
        )
        // this.state.description etc, referencia os props.description do outro arquivo
    }
}