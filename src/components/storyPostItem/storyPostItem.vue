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
<h1>title: {{ title }} </h1>
<h2>owner: {{ username }} </h2>
<h3>stars: {{ stars }}</h3>
<p v-if="description">description: {{ description }}</p>
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
    name: "StoryPostItem",
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
title: String,
username: String,
stars: Number,
description: String,        
        data: {
            // type: Object,
            // required: true,
            // default: () => ({})
        }
    }
}
</script>

<style lang="scss" src="./storyPostItem.scss"></style>