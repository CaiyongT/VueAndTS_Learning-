<template>
<div>
  <h1>{{ num }}</h1>
  <RateStars :value="3" @update="notice">电影评分</RateStars>
  <br>
  <RateStars :value="2" @update="notice">课程评分</RateStars>
  <img :src="Logo" alt="">
  <!-- <TodoList title="Alpha" itemKey="todo_Nate"></TodoList>
  <TodoList title="Bravo" itemKey="todo_Nora"></TodoList> -->
  <LearnTs :title="114514" :price="1919810"></LearnTs>
</div>
</template>
<script setup>
  import Logo from './assets/logo.svg'
  import TodoList from './components/TodoList.vue'
  import RateStars from './components/RateStars.vue'
  import LearnTs from './components/LearnTs.vue'
  const num =1;
  function  notice(val) {
    console.log(val);
  }
  
</script>
<style lang="scss">
  $primary-color:red;
  $font-size:20px;
  
</style>