<template>
  <button class="x-button">
    <span class="button-text">
      <slot>Follow</slot>
    </span>
  </button>
</template>

<script>

export default {
  // eslint-disable-next-line vue/component-definition-name-casing
  title: 'xButton',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String
    }
  }
}
</script>

  <style lang="scss" src="./button.scss"></style>
