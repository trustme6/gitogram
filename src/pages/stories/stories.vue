<template>
<div class="wrapper">
<h1>Stories</h1>
<storyPostItem />
<router-view />
</div>
</template>
<script>
import storyPostItem from '@/components/storyPostItem/storyPostItem.vue'

export default {
  name: 'Stories',
  components: {
    storyPostItem
  }
}
</script>
