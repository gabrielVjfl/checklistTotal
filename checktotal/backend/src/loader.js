// Vai carregar os principais arquivos de configuração

const app = require('./config/server')  // Pega o express

require('./config/database') // conexao com o mongo

// pega os get, post,put,delete e passa para o  app
require('./config/routes')(app)  // pega as rotas


