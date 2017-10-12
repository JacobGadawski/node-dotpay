const Request = require('./Request')

class GetPayoutInfo extends Request {
    
    constructor( control ){
        super()
        this.control = control
    }

    method(){
        return 'GET'
    }

    url(){
        return `api/v1/operations/?type=payout_any_amount&control=${ this.control }`
    }

}

module.exports = GetPayoutInfo