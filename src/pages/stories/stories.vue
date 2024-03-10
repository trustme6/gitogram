<template>
<div class="wrapper">
<h1>Stories</h1>
<ul class="list">
  <li class="item" v-for="item in items" :key="item.id">
  <storyPostItem
   :title="item.title"
   :description="item.description"
   :username="item.owner.login"
   :stars="item.stargazers_count"
  />
  </li>
</ul>
<router-view />
</div>
</template>
<script>
/* eslint-disable */
import storyPostItem from '@/components/storyPostItem/storyPostItem.vue'
import * as api from '../../api'

export default {
  name: 'Stories',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getPostData(item){
      title="item.name"
      description="item.description"
      username="item.owner.login"
      stars="item.stargazers_count"
    }
  },
  components: {
    storyPostItem
  }, 
  async created () {
    try {
      const {data} = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
console.log(error)
    }

  }
}
</script>
<style lang="scss" src="./stories.scss"></style>
