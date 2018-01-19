import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import photoLive from '@/photoLive/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'photo',
      component: photoLive
    }
  ]
})
