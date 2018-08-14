import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Todo from '../components/Todo'
import Doing from '../components/Doing'
import Done from '../components/Done'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'todo',
          component: Todo
        },
        {
          path: 'doing',
          component: Doing
        },
        {
          path: 'Done',
          component: Done
        },
        {
          path: '',
          redirect: 'todo'
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About,
      props: true
    }
  ]
})
