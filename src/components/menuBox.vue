<template>
<div class="menuBar">
    <div class = "category">
        <router-link to="/" class="menues">HOME</router-link>
        <router-link to="/review" class="menues" v-if="this.$store.state.userStore.isLogin">REVIEW</router-link>
        <router-link to="/about" class="menues">ABOUT</router-link>
        <router-link to="/myPage" class="menues" v-if="this.$store.state.userStore.isLogin">MYPAGE</router-link>
    </div>
    <div class="login" v-if="this.$store.state.userStore.isLogin == false">
        <router-link to="/login" class="login">SIGN IN</router-link>
        <router-link to="/register" class="login">SIGN UP</router-link>
    </div>
    <div class="login" v-else>
        <button @click="logout">logout</button>
    </div>
    <a>{{this.$store.state.userStore.isLogin}}</a>
 </div>
<br>
</template>

<script>



export default {
 name:'menuBox',

    data(){
        return{
            isLogin: false
        }
    },
    methods: {
      logout(){
        this.$store.commit('logOut')
        this.$router.push('/login')
      },

    },




}
</script>

<style scoped>
@import "../assets/menuStyle.css"
</style>