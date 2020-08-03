const express = require('express')

module.exports = function(server){

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Rotas da API
    const billingCyclesService = require('../api/billingCycleService')
    billingCyclesService.register(router, '/billingCycles')
}