import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import navMenu from '@/views/menu/navMenu'
import leftMenu from '@/views/menu/leftMenu'
import home from '@/views/menu/home'
import jacket from '@/views/clothing/jacket'
import lowerBody from '@/views/clothing/lower-body'
import milk from '@/views/food/milk'
import snacks from '@/views/food/snacks'
import fruits from '@/views/fruit/fruits'
import vegetables from '@/views/fruit/vegetables'
import fish from '@/views/seafood/fish'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/clothing',
      name: 'clothing',
      component: leftMenu,
      // redirect:'/clothing/jacket',
      children:[//配置子路由的两种方式
        // {path: '/',redirect:'jacket',},
        {path: 'jacket',name: 'jacket',component: jacket,},
        {path: '/clothing/lower-body',name: 'lower-body',component: lowerBody,}
      ]
    },
    {
      path: '/food',
      name: 'food',
      component: milk,
      children:[
        {path: 'snacks',name: 'snacks',component: resolve => require(['@/views/food/snacks'], resolve),}
      ]
    },
    {
      path: '/fruit',
      name: 'fruit',
      component: fruits,
      children:[
        {path: 'vegetables',name: 'vegetables',component: vegetables,}
      ]
    },
    {
      path: '/seafood',
      name: 'seafood',
      component: fish
    },
  ]
})
