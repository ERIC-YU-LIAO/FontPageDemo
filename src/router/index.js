import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import cardorder from '../components/page/cardorder'
import signin from '../components/signin'
import footer2 from '../components/footer'
import orderlist from '../components/page/orderlist'
import checkout from '@/components/page/checkout'
import home from '../components/home'

Vue.use(VueRouter)

  const routes = [
  {   
      path: '*',
      redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin,
  },
  {
    path: '/main',
    name: 'Dashboard',
    component: () =>import('../components/Dashboard.vue'),
    children:
    [
      {
        path: 'cardorder',
        name: 'cardorder',  
        components: {cardorder:cardorder},
      },
    ]
  },
  {
    path:'/footer2',
    name: 'footer2',
    component: footer2,
    children:
    [
      {
        path: 'orderlist',
        name: 'orderlist',
        components:{orderlist:orderlist} ,
      },
      {
        path: '/checkout/:orderId',
        name: 'checkout',
        components:{checkout:checkout},
      }
      
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
