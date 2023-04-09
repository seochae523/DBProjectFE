import { createApp } from 'vue'
import Vuex from 'vuex'
import App from '../App.vue';
import createPersistedState from 'vuex-persistedstate';
import userStore from '@/store/modules/userStore.js'
const app = createApp(App)
app.use(Vuex)


const store = new Vuex.Store({

    modules:{
        userStore: userStore
    },
    plugins: [createPersistedState({
        paths: ["userStore"]
    })]

  
})

export default store