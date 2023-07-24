<template>
<div>
  <h1>{{ num }}</h1>
  <RateStars :value="3" @update="notice">电影评分</RateStars>
  <br>
  <RateStars :value="2" @update="notice">课程评分</RateStars>
  <!-- <TodoList title="Alpha" itemKey="todo_Nate"></TodoList>
  <TodoList title="Bravo" itemKey="todo_Nora"></TodoList> -->
  
</div>
</template>
<script setup>
  import TodoList from './components/TodoList.vue'
  import RateStars from './components/RateStars.vue'
  const num =1;
  function  notice(val) {
    console.log(val);
  }
</script>
