

const userStore = {
    state: {
        userId: '',
        userName: '',
        userPw: '',
        isLogin: false
    },
    mutations: {
        testLogin: function(state, payload){
            state.userId = payload.id
            state.userPw = payload.pw
            state.isLogin = payload.isLogin
        },
        login: function (state, payload) {
            state.userId = payload.id
            state.userPw = payload.pw
            state.isLogin = payload.isLogin
        },
        
        logOut: function(state){
            state.isLogin=false;
        }

    }
}

export default userStore