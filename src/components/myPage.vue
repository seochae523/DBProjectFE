<template>
    <menuBox/>
  <h1 style="font-size: 50px; margin-top:-1%;">My page</h1>
  <div class="reservationInfo">
  <h2>My Reservation</h2>
  <h3>Room -number-</h3>
  <h3>Start date : -startDate-</h3>
  <h3>End date : -EndDate-</h3>
  
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
  
    }
  
    </script>
    
    <style>
    .reservationInfo{

    }
    </style>