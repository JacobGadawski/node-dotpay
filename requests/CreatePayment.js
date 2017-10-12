const Request = require('./Request')

class CreatePayment extends Request {
    
    constructor( shopId, data ){
        super()
        this.shopId = shopId
        this.data = data
    }
    
    getData(){
        return {
            id: this.shopId , 
            amount: this.data.amount,
            currency: this.data.currency,
            description: this.data.description,
            control: this.data.control,
            redirection_type: 0,
            buttontext: this.data.buttontext,  
            url: this.data.url,
            urlc: this.data.urlc,
            payer: this.data.payer
        }
    }

    method(){
        return 'POST'
    }

    url(){
        return `/api/v1/accounts/${ this.shopId }/payment_links/`
    }

}

module.exports = CreatePayment