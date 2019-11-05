import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //从from到to的route
  document.title = to.meta.title;
  // console.log(to);
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
