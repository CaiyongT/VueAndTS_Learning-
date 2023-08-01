<!-- eslint-disable vue/require-v-for-key -->
<template>
    <slot>{{ title }}:{{ price }}</slot>
    <input ref="inputs" type="text" v-model="val">
    <button @click="add">click</button>
    <div>
        <h1 @click="add">{{ count }}*2={{ double }}</h1>
       <ul>
        <li v-for="c in Courses">
            {{ c.name }}||
            {{ c.price }}
        </li>
       </ul>
    </div>
</template>
<script setup lang="ts">
    withDefaults(defineProps<IProps>(),{
        title:'默认标题',
        price:100
    })
    interface IProps{
        title?:string
        price?:number
    }
    
    //ref变量的格式可以用<>来传递，最常用的方式
    import {ref,onMounted,computed,withDefaults} from 'vue'
    let Courses = ref<Course[]>([])
    let count = ref(1)
    let val = ref('')
    let inputs = ref<HTMLInputElement|null>()
    let double = computed(()=>count.value*2)
    interface Course{
        name:string
        price:number
    }
    function add(event:Event){
        console.log(event)
        Courses.value.push({
            name:'vue'+count.value,
            price:count.value++
        })
        count.value++
    }

    onMounted(()=>{
        inputs.value?.focus()
    })
</script>
<style>

</style>