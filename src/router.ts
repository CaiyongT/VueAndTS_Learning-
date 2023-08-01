import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import Home from './Pages/Home/HomePage.vue'
import Login from './Pages/Home/LoginPage.vue'
// import About from './Pages/Home/About.vue'
import Video from './Pages/Videos/Video.vue'
const routes = [
    {path:'/',component:Home},
    {path:'/Login',component:Login},
    {path:'/About',component:()=>import ('./Pages/Home/About.vue')},
    {path:'/Video/:vid',component:Video},
]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router