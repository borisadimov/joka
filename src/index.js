import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Home from 'components/Home';
import Personal from 'components/Personal';


Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
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


function preloadImages()
{
for(var i = 0; i<arguments.length; i++)
jQuery("<img />").attr("src", arguments[i]);
}
preloadImages("/assets/images/logos/l1.gif","/assets/images/logos/l2.gif","/assets/images/logos/l3.gif","/assets/images/logos/l4.gif","/assets/images/logos/l5.gif","/assets/images/logos/l6.gif","/assets/images/logos/l7.gif","/assets/images/logos/l8.gif","/assets/images/logos/l9.gif","/assets/images/logos/l10.gif");
