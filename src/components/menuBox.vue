<template>
<div class="menuBar">
    <div class = "category">
        <router-link to="/" class="menues">HOME</router-link>
        <router-link to="/review" class="menues">REVIEW</router-link>
        <router-link to="/about" class="menues">ABOUT</router-link>
        <router-link to="/myPage" class="menues" >MYPAGE</router-link>
    </div>
    <div class="login" v-if="isLogin==false">
        <router-link to="/login" class="login">SIGN IN</router-link>
        <router-link to="/register" class="login">SIGN UP</router-link>
    </div>
    <div v-else>
        <a>LOG OUT</a>
    </div>
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
}
</script>

<style scoped>
@import "../assets/menuStyle.css"
</style>