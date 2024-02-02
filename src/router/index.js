import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import userData from '@/utils/userData'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component: Main,
      meta:{
        login:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
router.beforeEach((to,from)=>{
  const user = userData()

  if (!user && to.name != "login" ){ 
    return { name: "login" }
  }
  if(user && to.name == "login") {
    return from
  }
})
export default router
