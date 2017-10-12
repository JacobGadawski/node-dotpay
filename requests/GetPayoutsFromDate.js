const Request = require('./Request')

class GetPayoutsFromDate extends Request {
    
    constructor( date ){
        super()
        this.dateFrom = date
    }

    method(){
        return 'GET'
    }

    url(){
        return `api/v1/operations/?type=payout_any_amount&creation_date_from=${ this.dateFrom }`
    }

}

module.exports = GetPayoutsFromDate