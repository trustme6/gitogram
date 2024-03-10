<template>
    <div class= "c-stories-slider">
        <div class="stories-container">
            <storyPostItem />
        </div>
    </div>
</template>

<script>
import { storyPostItem } from "../storyPostItem";

export default {
    components: { storyPostItem },
    data() {
        return {}
    }
}
</script>