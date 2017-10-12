const sha256 = require('sha256')

module.exports  = {
    merge( ...args ){
        for( let i=1 ; i < args.length; i++ ){
            for( let key in args[i] ){
                args[0][ key ] = args[i][key]
            }
        }
        return args[0]
    },
    getUserTransactionSignature( data, pin ){
        let sign = pin
        for( let key in data ){
            if( key === "signature" ) continue
            sign += data[key]
        }
        return sha256( sign )
    }
}