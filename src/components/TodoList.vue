<template>
    <div>
      <h1> hello, {{ title }} </h1>
      <input type="text" v-model="val" @keypress.enter="addTodo">
      <button @click="addTodo">增加</button>
      <button @click="clearTodo" v-if="doneCount!=0">清除</button>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" >
          {{ todo.title }}
        </li>
        <div>
          <input type="checkbox" v-model="allDone">全选
        </div>
        <div>
          <!--强行在DIV中使用JS代码可以实现，但是丑，而且不好管理-->
          共计事件：{{ todos.length }}
          已完成：{{ doneCount }}
          未完成：{{ todoCount }}
        </div>
      </ul>
      
    </div> 
  </template>
  
  <script>
  import { defineComponent } from "vue";
  export default defineComponent({
    props:{
        title:{
            type:String,
            required:true
        },itemKey:{
            type:String,
            required:true,
            default:"todos"
        }
    },
    data(){
      return {
        msg: 'Tuo',
        todos:localStorage.getItem(this.itemKey)?JSON.parse(localStorage.getItem(this.itemKey)):
        [{title:"吃早饭",done:true},
        {title:"喝咖啡",done:true},
        {title:"记单词",done:true}],
      }
    },watch:{
        todos:{
          handler(){
            localStorage.setItem(this.itemKey,JSON.stringify(this.todos))
          },
          deep:true,
          immediate:true
        }
    },
    computed:{
      doneCount(){
        return this.todos.filter(v=>v.done==true).length
      },
      todoCount(){
        return  this.todos.filter(v=>v.done==false).length
      },
      allDone:{
          get(){
            return  this.doneCount === this.todos.length
          },
          set(value){
            this.todos.forEach(todo => {
              todo.done = value;
            });
          }
      }
    },
    methods: {
      addTodo() {
        if (this.val !== '') {
          this.todos.push({title:this.val,done:false})
          this.val = '';
        }
      },clearTodo(){
        this.todos = this.todos.filter(v=>v.done===false)
      }
    }
  })
  </script>
  
  <style>
  </style>
  