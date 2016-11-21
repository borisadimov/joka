import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Home from 'components/Home';
import Personal from 'components/Personal';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
});

new Vue({
  el: '#main',
  router,
  render: h => h(App)
});
