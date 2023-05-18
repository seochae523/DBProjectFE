

const couponStore = {
    state: {
        coupons:[]

    },
    mutations: {
        getCoupons: function(state, payload){
            state.coupons = payload
        }

    }
}

export default couponStore