const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://192.168.0.104/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."