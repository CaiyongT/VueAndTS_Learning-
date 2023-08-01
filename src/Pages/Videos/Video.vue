<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>This is video:{{ id }}</h1>
    </div>
</template>
<script setup>
 import  {useRouter,useRoute} from 'vue-router'
 const route = useRoute()
 console.log(route);
  const {vid:id} = route.params
</script>
<style>

</style>