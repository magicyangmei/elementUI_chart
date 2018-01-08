import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chartComponent from '@/components/chart'
import chartDetials from "@/components/chartDetials";
import chartPage from "@/components/chartList";
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/echart',
      name:"chartComponent",
      component:chartComponent
    },
    {
      path:'/chart',
      name:"chartDetials",
      component:chartDetials
    },
    {
      path:'/chart-page',
      name:"chartPage",
      component:chartPage
    }
  ]
})
