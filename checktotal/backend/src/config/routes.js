const express = require('express')


module.exports = function(app) { // vai ser enviado para o frontend

    // Api Routes

    const router = express.Router()

    app.use('/api', router)

    // pega os serviços do node-restful
    const RestFul = require('../api/checkTotal/Restful')

    // register usa todos os methods get post put delete

    // http://localhost:3003  /api/check , 
    
        RestFul.register(router, '/check') // registra todas as urls do webservice  

        // Api = Router
        // Check = Restfull
}




