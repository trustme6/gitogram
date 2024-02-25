<!-- eslint-disable vue/require-component-is -->

<template>
  <component :is="name" />
</template>

<script>
import * as icons from './variants'
export default {
  name: 'Icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>

<style lang="scss" src="./icons.scss">
</style>
