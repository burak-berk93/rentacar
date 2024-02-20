import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "../components/MainContent";
import CarsView from "../views/CarsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainContent
  },
  {
    path: '/rent',
    name: 'rent',
    component: CarsView,
    props:true
  },
  
];

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
