<template>
    <menuBox/>
  <h1 style="font-size: 50px; margin-top:-1%;">My page</h1>
  <div class="reservationInfo">
    <div>
      <input type="password" class="input" v-model="user.password" name="password" placeholder="Enter your password"/>
    </div>
    <br>
    <div>
      <input type="password" class="input" v-model="user.passwordConfirm" placeholder="rewrite your password again"/>
    </div>
    <button style="border:none; 
    background:black; 
    border-radius: 10px; 
    width: 200px; 
    height: 30px; 
    margin-top: 2%; 
    color: white; 
    font:bolder;" @click="changePassword">change password</button>
  <h2>My Reservation</h2>
  <div v-for="(row, idx) in $store.state.userStore.reservationInfo" :key="idx" class="reservation">
  <h3>Room {{row.room_number}}</h3>
  <h3>Start date : {{row.start.substr(0,10)}}</h3>
  <h3>End date : {{row.end.substr(0,10)}}</h3>
</div>
  
  <a></a>
  </div>
    </template>
  
    <script>
    import menuBox from './menuBox.vue';
    export default {
      name:'myPage',
      components:{
        menuBox,
    },
    data(){
      return{
        user:{
          id:'',
          password: '',
          passwordConfirm: '',
          },
        information:{
          roomNumber:0,
          startDate:0,
          endDate:0
        }
        }
      
    },
    methods: {
      changePassword(){
        this.user.id = this.$store.state.userStore.userId
        if (this.user.password == this.user.passwordConfirm){
          this.$axios.post('/myPage', { 
            user: this.user,
          })
          .then((res) => {
            alert(res.data.message);
          })
          .catch(function (error) {
            alert(error)
          })
        }
        else{
          alert("cheak your password again");
        }
}
},
  
    }
  
    </script>
    
    <style>
    .reservationInfo{

    }
    .reservation{
      border-bottom: 1px solid black;
    }
    </style>