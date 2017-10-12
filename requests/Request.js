class Request {
    
    constructor(shopId, data){
        this.shopId = shopId
        this.data = data
    }

    getData(){
        return {}
    }

    method(){
        return ''
    }

    url(){
        return ''
    }

}

module.exports = Request