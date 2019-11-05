import Vue from 'vue'
import Router from 'vue-router'

const Discovery = () => import('../views/discovery/Discovery.vue')
const Attention = () => import('../views/attention/Attention.vue')
const Message = () => import('../views/message/Message.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Search = () => import('../views/search/Search.vue')
const Writen = () => import('../views/writen/Writen.vue')

Vue.use(Router)
const routes = [{
    path: '/',
    redirect: 'discovery'
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '小笺-发现'
    }
  }, {
    path: '/message',
    name: 'message',
    component: Message,
    meta: {
      title: '小笺-消息'
    }
  }, {
    path: '/attention',
    name: 'attention',
    component: Attention,
    meta: {
      title: '小笺-关注'
    }
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '小笺-个人中心'
    }
  }, {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      title: '小笺-搜索'
    }
  }, {
    path: '/writen',
    name: 'writen',
    component: Writen,
    meta: {
      title: '小笺-写作'
    }
  },
]
export default new Router({
  routes,
  mode: 'history'
})