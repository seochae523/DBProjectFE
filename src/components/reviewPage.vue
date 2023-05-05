<template>
    <menuBox/>
    <form @submit="onSubmitForm" v-if="this.$store.state.userStore.isLogin">
        <input class="contextInput" type="text" v-model="contents" style="font-size:30px; white-space: pre-line;">
        <button class="submitBtn">WRITE</button>
    </form>

    <div class="star"
        v-for="index in 5"
        :key="index"
        @click="check(index)"
      >
        <span v-if="index <= info.score">★</span>
        <span v-else>☆</span>
      </div>
    
    <!-- 로컬에 저장까지는 완료! -->
      <div v-for="(row, idx) in $store.state.review.review" :key="idx">
        <hr style="margin-top:5%">
        <div class="info">
            <div class="star"
        v-for="index in row.score"
        :key="index"
      >
        <span v-if="index <= row.score">★</span>
        <span v-else>☆</span>
      </div>
        <a>| {{ row.user_id }} | &nbsp;</a>
        <a>{{ formatDate(row.date, 0)  }}</a>
        </div>
        <div style="background: rgba(0,0,0,0.1); width: 10%; margin:0 auto">
            <a style="font-size: 20px;">{{ row.room_number }}</a>
        </div>
        <div>
        <a class="context">{{ row.contents }}</a>
        </div>
      </div>


  </template>

<script>
import menuBox from './menuBox.vue';
export default {
 name:'reviewPage',
components:{
    menuBox,
},

data(){
    return {
        info:{
            contents : '',
            room_number: 0,
            user_id : '',
            date : '',
            user_name : '',
            review_number:0,
            score:5
            },
        contents: '',
        reviewList:[],
        score:5
    }
},

methods:{
    formatDate(date, state) {
        if(state==1){ // 현재시각 날짜로 표현
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
        }
        else{ // 입력 시각 날짜로 표현
            const d = new Date(date)
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
        }
    },

    check(index) {
      this.info.score = index;
    },

    testSubmitForm(){
        if (this.contents === '') {
          alert('Please write the contents')
          return
        }
        this.info.contents=this.contents;
        this.info.user_id=this.$store.state.userStore.userId;
        this.info.user_name=this.$store.state.userStore.userName;
        this.info.date=2002;
        this.info.room_number=101;
        this.review_number+=1;
        this.$store.commit("submitReview", this.info);
    },
    // db저장된걸 불러오는 걸 못하네
    onSubmitForm(){
        if (this.contents == '') {
          alert('Please write the contents')
          return
        }
        this.info.contents=this.contents;
        this.info.user_id=this.$store.state.userStore.userId;
        this.info.user_name=this.$store.state.userStore.userName;
        this.info.date = this.formatDate(new Date(), 1);
        this.info.room_number=101;
        this.review_number=1;
        this.$axios.post('/review/data', {info : this.info})
        .then((res) => {
            this.info.review_number=res.review_number;
            this.$store.commit("submitReview", this.info);
            return
        })
        .catch(function (error) {
            this.info.review_number-=1;
            alert(error + '123')
        })

    }
}
}
</script>
<style>
.context{
    white-space: pre-line;
    font-size: 30px;
}
.info{
    font-size: 25px;
}
.submitBtn{
 
    width: 10%;
    height: 40px;
    border-radius: 10px;
    background: #B93234;
    opacity: 0.8;
    color: white;
    font-size:30px;
}
.id{
    border: 2px solid black;
    padding: 3% 10% 3% 10%;
    
}
.contextInput{
    border: 2px solid black;
    width: 60%;
    height: 100px;
    
}
.reviewInputDiv{
    border: 2px solid black;
    padding: 3% 30% 3% 40%;
}

.reviewContextDiv{
    margin-top: 10%;
}
.board-list {
    width: 768px;
    margin: auto;
}

.board-detail {
    width: 768px;
    margin: auto;
    text-align: left;
}

.board-contents {
    padding: 12px 8px;
    border-bottom: 1px solid #eee;
}

.common-buttons {
    padding: 8px;
    text-align: right;
}
.table {
    margin: auto;
    width: 100%;
    text-align: center;
    border: 2px soild black;
}
td, th {
    padding: 10px;
    border: 1px solid #ccc;
}
.star{
    display: inline;
}
</style>

