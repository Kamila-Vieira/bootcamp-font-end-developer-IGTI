import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Petshop from '@/views/Petshop'
import Ecommerce from '@/views/Ecommerce'

import ListaProdutos from '@/views/produtos/ListaProdutos'
import Produto from '@/views/produtos/Produto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/petshop',
    name: 'Petshop',
    component: Petshop
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: Ecommerce,
    children: [
      { path: '', name: 'ListaProdutos', component: ListaProdutos },
      { path: ':id', name: 'Produto', component: Produto }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
