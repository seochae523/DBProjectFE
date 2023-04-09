import router from '@/router/router'

const userStore = {
    state: {
        userId: '',
        userName: '',
        userPw: '',
        token: '',
        isLogin: false
    },
    mutations: {
        login: function (state, payload) {
            state.userId = payload.id
            state.userPw = payload.pw
            state.isLogin = payload.isLogin
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        testLogin: function(state, payload) {
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