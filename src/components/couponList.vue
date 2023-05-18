<template>
    <div>
      <br>
      <button @click="getCoupons" style="width: 100px; height: 45px; font-weight: bolder; background: black; color: white; border: none; border-radius: 10px;">COUPONS</button>
      <div v-if="isOpen" class="listDiv">
        <button v-for="item in this.$store.state.userStore.coupons" :key="item.id" @click="selectItem(item)" class="coupons">
          {{ item.discount_rate }}% 
          <br> {{ item.name }}
        </button>
        <!--db에서 쿠폰들 가져와서 뿌리는 것까지 완료함-->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        menuItems: [
          { id: 1, label: '첫 가입 쿠폰!', discount: '10'},
          { id: 2, label: '항목 2', discount: '5' },
          { id: 3, label: '항목 3', discount: '6' },
          // 추가적인 항목들
        ],
        info:{
          id : '',
        },
        coupons:[]
      };
    },
    methods: {

      selectItem(item) {
        console.log('선택한 항목:', item);
        // 선택한 항목에 대한 로직 추가

      },
      getCoupons(){
        this.isOpen = !this.isOpen;
        this.info.id = this.$store.state.userStore.userId;
        this.$axios.post('/coupon', {
            info : this.info
        })
        .then((res) => {
            this.coupons = res.data.coupons
            this.$store.commit('getCoupons', this.coupons)
            console.log(this.$store.state.couponStore.coupons)
        })
        .catch((err) =>{
            alert(err)
        });
      }
    },
  };
  </script>

  <style scoped>
    .coupons{
      border-radius: 8px;
      display: flex;
      align-items: center;
      text-align: left;
      margin: auto;
      width: 300px;
      height: 100px;
      font-size:30px;
      font-weight: bold;
    }

    .listDiv{
      width: 50%;
      margin: auto;

    }
  </style>
  