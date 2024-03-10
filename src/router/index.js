/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router';
import Feeds from '../pages/feeds/feeds.vue';
import Stories from '../pages/stories/stories.vue';
const routes = [{
    path: "/",
    component: Feeds,
    name: "feeds"
  },
  {
  path: "/stories",
  component: Stories,
  name: "stories"
}];

  export const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  export default router;