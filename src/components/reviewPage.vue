<template>
    <menuBox/>
    <form @submit="onSubmitForm">
        <input class="contextInput" type="text" v-model="contents" style="font-size:30px; white-space: pre-line;">
        <button class="submitBtn">WRITE</button>
    </form>
    


   
   
      <div v-for="(row, idx) in reviewList" :key="idx">
        <hr style="margin-top:5%">
        <div class="info">
        <a>{{ row.author }} | &nbsp;</a>
        <a>{{ row.created_at }}</a>
        </div>
        <div style="background: rgba(0,0,0,0.1); width: 10%; margin:0 auto">
            <a style="font-size: 20px;">{{ row.roomNo }}</a>
        </div>
        <div>
        <a class="context">{{ row.context }}</a>
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
        contents:"",
        reviewList:[]
    }
},
methods:{
    onSubmitForm(e){
        e.preventDefault();
        this.reviewList.push({"roomNo":101,
            "context": this.contents,
            "author": "작성자1",
            "created_at": "작성일시1"});
        
        this.contents="";

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

</style>