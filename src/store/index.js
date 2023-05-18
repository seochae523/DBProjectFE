import { createApp } from 'vue';
import Vuex from 'vuex';
import App from '../App.vue';
import createPersistedState from 'vuex-persistedstate';
import userStore from '@/store/modules/userStore.js';
import reviewStore from '@/store/modules/review.js';
import reservationStore from './modules/reservation';
import couponStore from './modules/coupons';
const app = createApp(App)
app.use(Vuex)


const store = new Vuex.Store({
    
    modules:{
        userStore: userStore,
        review: reviewStore,
        reservationStore: reservationStore,
        couponStore: couponStore
    },
    plugins: [createPersistedState({
        paths: ["userStore", "review", "reservationStore", "couponStore"],
        
    })]

  
})


export default store