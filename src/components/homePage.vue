<template>
    <!-- 모달 창 -->
    <div class ="black-bg" v-if="floorFlag>0">

      <!-- 예약창과 방 선택 창 크기 다르게 -->
      <div :class="[ floorFlag==4? 'roomR' : 'white-bg']">

        <!-- 닫기, 뒤로, 크게 -->
        <div class="controlButtons">
          <button class="exit" @click="exit()"></button>
          <button class="back" @click="roomToFloor()"></button>
        </div>
        <!---->
        <div v-if="timeSelectFlag==1">
          <!-- 시간 설정 --> 
          <DatePicker v-model="picked" locale="ko" is24hr is-range mode="date"/>
          <div>
            <br>
          <button class="timeSelectButton" @click="sendTime(picked)">OK</button>
          <button class="timeSelectButton" @click="testTimeSend">TESTOK</button>
          
            </div>
        </div>
  
        <div style="width:100%; height: 100%;" v-if="floorFlag==1 && timeSelectFlag==0">
  
          <button class = "roomBtn" v-for="(a,i) in 9" :key="(a,i)" @click="roomReservation(firstFloorRoomsOne[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[firstFloorRoomsOne[i]]==0">{{firstFloorRoomsOne[i]}}</button>
          
          <div style="height: 50%;"></div>
          
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(firstFloorRoomsTwo[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[firstFloorRoomsTwo[i]]==0">{{ firstFloorRoomsTwo[i] }}</button>
          <button class="elevator"></button>
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(firstFloorRoomsTwo[i+4])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[firstFloorRoomsTwo[i+4]]==0">{{ firstFloorRoomsTwo[i+4] }}</button>
        </div>
  
        <div style="width:100%; height: 100%;" v-if="floorFlag==2 && timeSelectFlag==0">
          <button class = "roomBtn" v-for="(a, i) in 9" :key="(a,i)" @click="roomReservation(secondFloorRoomsOne[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[secondFloorRoomsOne[i]]==0">{{secondFloorRoomsOne[i]}}</button>
          
          <div style="height: 50%;"></div>
          
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(secondFloorRoomsTwo[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[secondFloorRoomsTwo[i]]==0">{{ secondFloorRoomsTwo[i] }}</button>
          <button class="elevator"></button>
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(secondFloorRoomsTwo[i+4])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[secondFloorRoomsTwo[i+4]]==0">{{ secondFloorRoomsTwo[i+4] }}</button>
  
        </div>
          <div style="width:100%; height: 100%;" v-if="floorFlag==3 && timeSelectFlag==0">
          <button class = "roomBtn" v-for="(a,i) in 9" :key="(a, i)" @click="roomReservation(thirdFloorRoomsOne[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[thirdFloorRoomsOne[i]]==0">{{thirdFloorRoomsOne[i]}}</button>
          
          <div style="height: 50%;"></div>
          
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(thirdFloorRoomsTwo[i])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[thirdFloorRoomsTwo[i]]==0">{{ thirdFloorRoomsTwo[i] }}</button>
          <button class="elevator"></button>
          <button class = "roomBtn" v-for="(a,i) in 4" :key="(a,i)" @click="roomReservation(thirdFloorRoomsOne[i+4])" v-bind:disabled="this.$store.state.reservationStore.abilableRooms[thirdFloorRoomsTwo[i+4]]==0">{{ thirdFloorRoomsTwo[i+4] }}</button>
        </div>

        <div v-if="reservationFlag != 0">
          <div>
         <a style="float:left; font-size: 50px; font-weight: bold;">ROOM {{ reservationFlag }}</a>
         </div>
         <br>
         <div style="clear:both">
         <h1 style=" font-size: 20px; font-weight:bold;">cheak-in</h1>

         <h1>{{ startDate }}</h1>
        </div>
        <div>
         <h1 style=" font-size: 20px; font-weight:bold; ">cheak-out</h1>
         <h1>{{ endDate }}</h1>
        </div>
        <div>
          <a>payment</a>
          <input type="radio" v-model="payment" value="card">card
          <input type="radio" v-model="payment" value="cash">cash
          <couponList></couponList>
        </div>
        <br>
        
        <div style="margin-top:150px">
        <h style="font-size: 30px; font-weight: bold;">{{ price }}$</h>
        <br>
        
        <button style="border-radius: 12px;  width: 100px; height: 30px;" @click="reservation()">reservation</button>
        </div>
        </div>
      </div>
  

  
      <div class="floorDiv" v-if="timeSelectFlag==0">
          <button class="floorSelect" @click="showModal(1)">1st</button>
          <button class="floorSelect" @click="showModal(2)">2nd</button>
          <button class="floorSelect" @click="showModal(3)">3rd</button>
      </div>
  
    </div>

   
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
        <button class="reservationBtn" @click="showTimeSelect()">reservation</button>
   
  
  
  </template>
  
  <script>

import {  DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';
  import couponList from './couponList.vue';
  import menuBox from './menuBox.vue';
  
  export default {
    name: 'homePage',
    modalFlag: 0,
    data(){
      return {
        firstFloorRoomsOne:[101,102,103,104,105,106,107,108,109],
        firstFloorRoomsTwo:[110,111,112,113,114,115,116,117],
        secondFloorRoomsOne:[201, 202,203,204,205,206,207,208,209],
        secondFloorRoomsTwo:[210, 211,212,213,214,215,216,217],
        thirdFloorRoomsOne:[301, 302,303,304,305,306,307,308,309],
        thirdFloorRoomsTwo:[310, 311,312,313,314,315,316,317],

        price : 120,
        payment : '',
        floorFlag : 0,
        reservationFlag : 0,
        tmp : 0,
        newDate : new Date(),
        picked:{"start": this.newDate, "end": this.newDate},
        timeSelectFlag: 0,
        startDate:0,
        endDate:0,
        info :{
          start :0,
          end: 0,
          id : '',
          coupon: ''
        }
      }
    },
    methods: {
      testTimeSend(){
        this.timeSelectFlag = 0
        this.$store.commit('testGet')
      },
      showTimeSelect(){
        this.timeSelectFlag=1
        this.floorFlag=1
      },
      showModal(i){
        this.floorFlag=i
        this.reservationFlag=0
      },
      roomReservation(i){
        this.tmp=this.floorFlag
        this.reservationFlag=i
        this.floorFlag=4
      },
      roomToFloor(){
        if(this.reservationFlag!=0){
          this.floorFlag=this.tmp
          this.reservationFlag=0    
        }
        else{
          this.floorFlag=1
          this.timeSelectFlag=1
        }
      },
      sendTime(data){
        if(data.start==undefined || data.end==undefined){
          alert('please cheak your date')
        }
        else{
          const startYear = data.start.getFullYear();
          const startMonth = (data.start.getMonth() + 1).toString().padStart(2, '0');
          const startDay = data.start.getDate().toString().padStart(2, '0');
          this.startDate = startYear + '-' + startMonth + '-' + startDay;

          const endYear = data.end.getFullYear();
          const endMonth = (data.end.getMonth() + 1).toString().padStart(2, '0');
          const endDay = data.end.getDate().toString().padStart(2, '0');
          this.endDate = endYear + '-' + endMonth + '-' + endDay;

          this.timeSelectFlag=0

          this.info.start = this.startDate
          this.info.end = this.endDate
          this.info.id = this.$store.state.userStore.userId

          this.$axios.post('/', {info : this.info})
          .then((res) => {
            console.log(res.data.abilable)
            // local storage에 예약 가능 방 목록까지 저장 후 disable까지 가능
              this.$store.commit('getAbilableRooms', res.data.abilable);
          })
          .catch(function (error) {
              alert(error)
          })
        }
      },
      exit(){
        this.floorFlag=0
        this.timeSelectFlag=0
        this.reservationFlag=0
        this.payment=''
      },
      reservation(){
        if(this.payment == ''){
          alert('please check your payment')
        }
        else{
          alert('reservation complite!')
          this.exit()
        }
      },
      
    },

    components: {
      DatePicker,
      menuBox,
      couponList
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
  