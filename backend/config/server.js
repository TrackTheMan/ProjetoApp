const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function () {
    console.log(`BACKEND esta na porta ${port}.`);
})

/*server.use(function (req, res, next) {
    res.send('Funcionou')
})*/

module.exports = server