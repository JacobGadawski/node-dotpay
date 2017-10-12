const defaultConfig = require( './config/defaultConfig' )
const HttpClient = require('./HttpClient')
const CreatePayment = require('./requests/CreatePayment')
const CreatePayout = require('./requests/CreatePayout')
const GetPayoutInfo = require( './requests/GetPayoutInfo' )
const GetPayoutsFromDate = require( './requests/GetPayoutsFromDate' )
const utils = require('./utils')
 
class DotPay{
    constructor( config ){
        this.utils = utils
        this.config = this.utils.merge( defaultConfig,config )
        this.httpClient = new HttpClient( this.config )
    }
    async createPayment( data ){
        data.url = data.url || this.config.url
        data.urlc = data.urlc || this.config.urlc
        
        const response = await this.httpClient.makeRequest( new CreatePayment( this.config.dotPayShopId,data ) )
        return response
    }

    async createPayout( data ){
        const response = await this.httpClient.makeRequest( new CreatePayout( this.config.dotPayShopId,data ) )
        return response
    }

    async getPayoutInfo( control ){ 
        const response = await this.httpClient.makeRequest( new GetPayoutInfo( control ) )
        return response
    }
    
    async getPayoutsFromDate( date ){  //date string format must be yyyy-mm-dd
        const response = await this.httpClient.makeRequest( new GetPayoutsFromDate( date ) )
        return response
    }
    verifySignature( data ){
        if( this.utils.getUserTransactionSignature( data ,this.config.dotPayPin ) === data.signature ) return true
        else return false
    }
}

module.exports = DotPay