<template>
  <div
    :class="{ active }"
    class="c-progress"
  >
    <div
      ref="indicator"
      class="indicator" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  title: "progress" ,
  data () {
    return {
      active: false
    }
  },
  // eslint-disable-next-line vue/order-in-components
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  // eslint-disable-next-line vue/order-in-components
  mounted () {
    this.$nextTick(() => {
      this.active = true
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  // eslint-disable-next-line vue/order-in-components
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
