const port = 3003

const bodyparser = require('body-parser')

const express = require('express')

const app = express()

const allowCors = require('./cors')



app.use(bodyparser.urlencoded({
    extended: true, // suporta + tipos de dados
}))

app.use(bodyparser.json())



app.use(allowCors)


app.listen(port, () => {
    console.log("Checklist Total rodando na porta", port)
})

module.exports = app