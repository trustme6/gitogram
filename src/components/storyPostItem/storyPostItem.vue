<template>
    <div class="c-story-post-item">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                </div>
                <div class="user"></div>
            </div>
            <div class="content"></div>
            <div class="button"></div>
        </div>
        <template></template>
    </div>
</template>

<script>
import { xButton } from '../button'
import { xProgress } from '../progress'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'

export default {
    name: "StoryUserItem",
    components: {
        xButton,
        xProgress,
        placeholder,
        spinner
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

<style lang="scss" src="./StoryPostItem.scss"></style>