const restFul = require('node-restful')

const mongoose = restFul.mongoose

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    titulo: {
       type: String,
       required: true
    },
    done: {
      type: Boolean,
      required: true,
      default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },

})
module.exports = restFul.model("checklists2", todoSchema) // manda para o loader através do RestFul

