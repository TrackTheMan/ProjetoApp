const BillingCycle = require('./billingCycle')
const billingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, tunValidators: true})

BillingCycle.route('cont', function(req, res, next) {
    billingCycle.count(function(error, value) {
        if(error) {
        res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = BillingCycle