<template>
  <menuBox/>
    <p style="font-size: 30px; font-weight: bold;">SIGN UP</p>
    <br>
     
      <div>
        <div>
        <input type="text" class="input" v-model="user.name" name = "name" placeholder="Enter your name"/>
       
      </div>
		<br>
      <div>

        <input type="text" class="input" v-model="user.id" name="id" placeholder="Enter your ID"/>
      </div>
      <br>
      <div>

        <input type="password" class="input" v-model="user.password" name="password" placeholder="Enter your password"/>
      </div>
      <br>
      <div>

        <input type="password" class="input" v-model="user.passwordConfirm" placeholder="rewrite your password again"/>
			</div>

      </div>
      <button class="submitButton" @click="signUp" >submit</button>

</template>

<script>



import menuBox from './menuBox.vue';
export default {
	name: 'SignupForm',
	data() {
		return {
      user:{
			id: '',
			name: '',
			password: '',
			passwordConfirm: '',
      },
      index : 0
		}
	},
	methods: {
  
		signUp(){
    if (this.user.password == this.user.passwordConfirm){
      this.$axios.post('/register', { 
        user: this.user,
      })
      .then((res) => {
        if (res.data.success == true) {
          alert(res.data.message);
        }
        if (res.data.success == false) {
          alert(res.data.message);
        }
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
  components:{
    menuBox
  }
};
</script>

<style scoped>
.label{
  position: relative;
  display: block;
  width: 100%;
  margin-right: 2%;
  text-transform: uppercase;
}
  .input{
    width: 400px;
    height: 50px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: soild;
  }
    .submitButton{
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background:rgba(185,50,52,0.8);
    color:white;
    font-size : 30px;
    margin-top: 1%;
  }
  </style>