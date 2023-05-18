<template>
    <modalPage v-if="modalFlag" @closeModal="modalFlag=false"></modalPage>
    <menuBox/>

      <div class ="logo">
        <p class ="logoName">Sejong Hotel</p>
      </div>
      <br>
        <div class = "cheakInInfo">
        <h1>Check-In time  16 : 00</h1>
        <h1>Check-Out time 11 : 00</h1>
        </div>
        <a>{{this.$store.state.userStore.isLogin}}</a>
        <button class="reservationBtn" @click="modalFlag=true">reservation</button>
   
  
  
  </template>
  
  <script>


  import 'v-calendar/style.css';
  import menuBox from './menuBox.vue';
  import modalPage from './modalPage.vue';

  export default {
    name: 'homePage',
    modalFlag: 0,
    data(){
      return {
       modalFlag: false
        }
    },    


    components: {
      menuBox,
      modalPage
    }
  }
  </script>
  
  <style>
  
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
  
  @import "@/assets/modalStyle.css";
  @import "@/assets/homePageStyle.css";
  </style>
  