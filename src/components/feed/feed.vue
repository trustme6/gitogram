<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="c-feed">
    <toggler @onToggle="toggle" />
    <div
      v-if="shown"
      class="comments"
    >
      <ul class="comments-list">
        <li
          v-for="n in 6"
          :key="n"
          class="comments-item"
        >
          <comment
            text="Lorem Ipsum"
            username="Batman"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'

export default {
  name: 'FeedItem',
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" src="./feed.scss"></style>
