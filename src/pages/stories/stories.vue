<template>
<div class="wrapper">
<h1>Stories</h1>
<router-view />
<div class="content">
  <stories-slider />
</div>
</div>
</template>
<script>
/* eslint-disable */
// import storyPostItem from '@/components/storyPostItem/storyPostItem.vue'
import * as api from '../../api'
import storiesSlider from '@/components/storiesSlider/storiesSlider.vue';
export default {
  name: 'Stories',
  data () {
    return {
      items: []
    }
  },
  methods: {
    // getPostData(item){
    //   title="item.name"
    //   description="item.description"
    //   username="item.owner.login"
    //   stars="item.stargazers_count"
    // }
  },
  components: {
    storiesSlider 
    // storyPostItem
  }
//   async created () {
//     try {
//       const {data} = await api.trendings.getTrendings()
//       this.items = data.items
//     } catch (error) {
// console.log(error)
//     }

//   }
}
</script>
<style lang="scss" src="./stories.scss"></style>
