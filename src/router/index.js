/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router';
import Feeds from '../pages/feeds/feeds.vue';
const routes = [{
    path: "/",
    component: Feeds,
    name: "feeds"
  }];

  export const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  export default router;