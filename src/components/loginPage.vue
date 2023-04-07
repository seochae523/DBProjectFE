<template>
    <menuBox/>
    <div>
      <div>
        <p style="font-size: 30px; font-weight: bold;">SIGN IN</p>
        <div id="loginForm">
          <form @submit.prevent="testLogin">
            <p>
              <input class="input" name="uid" placeholder="Enter your ID" v-model="user.id"><br>
            </p>
            <p>
              <input name="password" class="input" placeholder="Enter your password" v-model="user.pw" type="password">
            </p>
            <p>
              <button type="submit" class="loginButton">Login</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import router from "@/router/router"
import menuBox from "./menuBox.vue"

router
  export default {

    data() {
      return {
        user:{
        id: '',
        pw: ''
        },
        isLogin: false,
      }
    },
    methods: {
      testLogin(){
        this.isLogin=true;
        router.push({path: '/'});
      },
      fnLogin() {
        if (this.user.id === '') {
          alert('Please enter your ID')
          return
        }
  
        if (this.user.pw === '') {
          alert('Please enter your password')
          return
        }
  
      this.$axios.post('/login', { 
        user: this.user,
      })
      .then((res) => {
        if (res.data.success == true) {
          alert(res.data.message);
          this.isLogin=true;
          router.push({path: '/'});
        }
        if (res.data.success == false) {
          alert(res.data.message);
          
        }
      })
      .catch(function (error) {
        alert(error)
      })
    }
    },
    components: {
        menuBox,
    }
  }
  </script>
  
  <style>
  #loginForm {
    width: 500px;
    margin: auto;
  }
  .input{
    width: 400px;
    height: 50px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: soild;
  }
  .loginButton{
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background:rgba(185,50,52,0.8);
    color:white;
    font-size : 30px;

  }
  </style>