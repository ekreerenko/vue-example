import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Todos = () => import('@/views/Todos.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
