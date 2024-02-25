<!-- eslint-disable vue/multi-word-component-names -->

<template>
<div class="c-top">
<div class="x-container">
    <div class="headline">
        <slot name="headline" />
    </div>
    <div class="content" v-if="$slots.content">
        <slot name="content" />
    </div>
</div>
</div>
</template>

<style lang="scss" src="./top.scss" scoped>

</style>
