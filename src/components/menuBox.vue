<template>
<div class="menuBar">
    <div class = "category">
        <router-link to="/" class="menues">HOME</router-link>
        <router-link to="/review" class="menues" @click="getReviews">REVIEW</router-link>
        <router-link to="/about" class="menues">ABOUT</router-link>
        <router-link to="/myPage" class="menues" v-if="this.$store.state.userStore.isLogin" @click="getInfo">MYPAGE</router-link>
    </div>
    <div class="login" v-if="this.$store.state.userStore.isLogin == false">
        <router-link to="/login" class="login">SIGN IN</router-link>
        <router-link to="/register" class="login">SIGN UP</router-link>
    </div>
    <div class="login" v-else>
        <button @click="logout">logout</button>
    </div>

 </div>
<br>
</template>

<script>



export default {
 name:'menuBox',

    data(){
        return{
            isLogin: false,
            info:{
            contents : '',
            roomNumber: 0,
            id : '',
            start: 0,
            name : '',
            end : 0,
            },
            reviewList: [],
            reservationInfo: {},
            coupons:[]
        }
    },
    methods: {
      logout(){
        this.$store.commit('logOut')
        this.$router.push('/login')

      },
      getReviews(){
        this.$axios.get('/review/data', {
            reviewList : this.reviewList
        })
        .then((res) => {
            this.reviewList = res.data.reviews
            // reviewList안에 오브젝트 형태로 리뷰들 쫙 잇으니까 이거 불러와서 store에 저장하면 된다잉
            this.$store.commit('initReviewList', this.reviewList)
            console.log(this.reviewList);
        })
        .catch((err) => {
            alert(err)
        })
      },
      getInfo(){
        this.info.id = this.$store.state.userStore.userId;
        this.$axios.post('/myPage/data', {
            info : this.info
        })
        .then((res) => {
            this.reservationInfo = res.data.info
            console.log(this.reservationInfo)
            this.$store.commit('getReservationInfo', this.reservationInfo)
        })
        .catch((err) =>{
            alert(err)
        });
        
      },

    },




}
</script>

<style scoped>
@import "../assets/menuStyle.css"
</style>