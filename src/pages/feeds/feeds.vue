<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="top">
    <top>
      <template #headline>
        <div class="headline">
          <h1>Gitogram /</h1>
          <div class="icons">
            <div class="icon">
              <icon name="home" />
            </div>
            <div class="icon">
              <icon name="currentUser" />
            </div>
            <div class="icon">
              <icon name="signOut" />
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <storyUserItem
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </top>
  </div>
  <div class="main-content">
    <div class="m-container">
      <div class="user">
        <div class="icon">
          <icon name="currentUser" />
        </div>
        <h2>
          Sam
        </h2>
      </div>
      <div class="post">
        <h1 class="head">
          Vue.js
        </h1>
        <span class="text">JavaScript framework for building interactive web applications ⚡</span>
      </div>
      <feed />
      <sliderItem>example</sliderItem>
    </div>
  </div>
</template>

<script>
import { top } from '../../components/top'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import stories from './data.json'
import sliderItem from '@/components/SliderItem/sliderItem.vue'
export default {
  name: 'Feeds',
  components: {
    top,
    icon,
    storyUserItem,
    feed,
    sliderItem
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">
</style>
