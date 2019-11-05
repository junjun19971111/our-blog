import Vue from 'vue'
import Router from 'vue-router'

const Discovery = () => import('../views/discovery/Discovery.vue')
const Attention = () => import('../views/attention/Attention.vue')
const Message = () => import('../views/message/Message.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Search = () => import('../views/search/Search.vue')
const Writen = () => import('../views/writen/Writen.vue')

Vue.use(Router)
const routes = [
  {
    path:'/',
    redirect: 'descovery'
  },
  {
    path: '/descovery',
    name: 'descovery',
    component: Discovery
  },{
    path: '/message',
    name: 'message',
    component: Message
  },{
    path: '/attention',
    name: 'attention',
    component: Attention
  },{
    path: '/profile',
    name: 'profile',
    component: Profile
  },{
    path: '/search',
    name: 'search',
    component: Search
  },{
    path: '/writen',
    name: 'writen',
    component: Writen
  },
]
export default new Router({
  routes,
  mode: 'history'
})
