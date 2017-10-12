const Request = require('./Request')

class CreatePayout extends Request {
    
    constructor( shopId, data ){
        super()
        this.shopId = shopId
        this.data = data
    }
    
    getData(){
        return {
            currency: this.data.currency,
            transfers: this.data.transfers
        }
    }

    method(){
        return 'POST'
    }

    url(){
        return `api/v1/accounts/${ this.shopId }/payout/`
    }

}

module.exports = CreatePayout