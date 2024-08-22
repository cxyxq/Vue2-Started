import Vue from 'vue'
import Router from 'vue-router'
import index_demo from '../pages/index_demo.vue'
import pageQuiButton_demo from '../pages/pageQuiButton.vue'
import pageQuiList_demo from '../pages/pageQuiList.vue'
import pageQuiNav_demo from '../pages/pageQuiNav.vue'

import index from '../pages/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/demo',
      name: 'index_demo',
      component: index_demo
    },
    {
      path: '/demo/btn',
      name: 'btn_demo',
      component: pageQuiButton_demo
    },
    {
      path: '/demo/list',
      name: 'list_demo',
      component: pageQuiList_demo
    },
    {
      path: '/demo/nav',
      name: 'nav_demo',
      component: pageQuiNav_demo
    }
  ]
})
