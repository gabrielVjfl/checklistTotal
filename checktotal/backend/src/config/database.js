const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/checklistTotal', {useNewUrlParser: true})
.then(() => {
    console.log('sucesso!')
}).catch(() => {
    console.log("erro!")
})