import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
// import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
