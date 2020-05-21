const Check = require('./TableBd')

// Configurando o node-restful

Check.methods(['get', 'post', 'put', 'delete'])

// atualiza o cliente e recebe o nome novo
// Validar as Atualizações

Check.updateOptions({new:  true,  runValidators: true}) 

module.exports =  Check // Manda para o routes.js
