<template>
    <menuBox/>
    <table class="table">
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일시</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, idx) in reviewList" :key="idx">
        <td>{{ row.idx }}</td>
        <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
        <td>{{ row.author }}</td>
        <td>{{ row.created_at }}</td>
      </tr>
      </tbody>
    </table>
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
        context:"",
        reviewList:[
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        }
        ]
    }
},
methods:{
    onSubmitForm(e){
        e.preventDefault();
        this.reviewList.push(this.context)
    }
}
}
</script>
<style>

.id{
    border: 2px solid black;
    padding: 3% 10% 3% 10%;
    
}
.context{
    border: 2px solid black;
    width: 50%;
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
tr:nth-of-type(even){
    background-color: rgba(255,0,0,0.1);
}
</style>