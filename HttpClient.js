const client = require( 'axios' )
const base64 = require( 'base-64' )

class HttpClient {

    constructor( config ){
        this.config = config
        this.client = client
        this.base64 = base64
    }

    makeRequest( request ){
        console.log( request )
        return new Promise( ( resolve, reject ) => {
            this.client( { 
                    url: `${ this.config[ this.config.mode ].dotPayBaseUrl }` + request.url(),
                    method: request.method(),
                    headers: { 'Authorization': `Basic ${ this.getUserBasic() }`},
                    data: request.getData()
                } )
                .then( response => resolve( response.data ) )
                .catch( err => console.log( err ) )
        })
    }

    getUserBasic(){
        return this.base64.encode( `${ this.config.dotPayUsername }:${ this.config.dotPayPassword }`)
    }

}

module.exports = HttpClient