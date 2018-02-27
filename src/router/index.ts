import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Instructions from '@/views/Instructions.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: Instructions,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
