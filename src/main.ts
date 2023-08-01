/* eslint-disable prefer-const */
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import router from './router'
const app = createApp(App);
app.use(router)
app.mount('#app')
//基础入门
//封装起来
// import  type {Course} from './types/main'

// let obj:Course = {
//     name:"bilibili",
//     price:400,
//     isOnline:false,
//     students:['Tuo','Chen']
// }
// console.log(obj);

// let w:Window = window
// w.open

// const ele:HTMLElement = document.createElement('div')

// ele.addEventListener('click',function(e:MouseEvent){

// },false)
// //TS自带类型推导
// //但是也可以发电，使用Any类型
// let anyArg:any

// //函数类型，函数和函数的参数，实际上也是个变量
// //所以也可以限制括号内参数的类型
// //甚至是限制函数的返回值，如下所示
// function add(a:number,b:number):number{
//     return a+b
// }
// //可以用接口直接抽象一个函数的类型和参数类型
// interface AddFn{
//     (a:number,b:number):number
// }
// //然后就能直接继承然这个接口，而不用每次都声明
// //这个接口函数继承接口指定的输入和输出
// const addAlpha:AddFn = (a,b)=>{
//     return a+b
// }
// //还可以用type指定类型
// type addFnAlpha = (a:number,b:number) =>number
// //也是一样的效果
// const addBarvo:addFnAlpha = (a,b)=>{
//     return a+b
// }
// //简单的TS泛型的理解

// function noop(arg:any):any{
//     return arg +""
// }
// //使用泛型约束输入和输出
// function noopOne<T>(arg:T):T{
//     return arg
// }
// //意思是，T2必须是T1内的类型
// function getProp<T1,T2 extends keyof T1>(obj:T1,name:T2):T1[T2]{
//     return obj[name]
// }
// let name = getProp(obj,'name')
// let prices = getProp(obj,'price')