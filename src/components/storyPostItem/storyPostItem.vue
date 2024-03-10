<template>
    <div class="wrapper-stories">
<button class="prev">
<span class="icon">
<icon name="arrow" />
</span>
</button>
<div class="c-story-post-item">
<div class="stories-container">
<div class="header">
<div class="progress">
<xProgress />
</div>
<div class="user"></div>
</div>
<div class="content">
 <div class="loader" v-if="loading">
                loading...
</div>
<div class="info" v-else>
<div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
<div v-else>some text</div>
</div>
</div>
<div class="button"><xButton /></div>
</div>
</div>
<button class="next">
<span class="icon">
<icon name="arrow" />
</span>
</button>
</div>
</template>

<script>
/* eslint-disable */
import { xButton } from '../button'
import { xProgress } from '../progress'
import { icon } from '../../icons'
// import { placeholder } from '../placeholder'
// import { spinner } from '../spinner'

export default {
    name: "StoryUserItem",
    components: {
        xButton,
        xProgress,
        icon
        // placeholder,
        // spinner
    },
    props: {
        active: Boolean,
        loading: Boolean,
        data: {
            type: Object,
            required: true,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" src="./storyPostItem.scss"></style>