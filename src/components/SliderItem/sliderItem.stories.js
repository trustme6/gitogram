import sliderItem from './sliderItem.vue'

export default {
  title: 'slider Item',
  component: { sliderItem }
}

export const defaultView = () => (
  {
    components: { sliderItem },
    template: `
        <sliderItem>
        <template>
        <p>test</p>
        </template>
        </sliderItem>
        `
  }
)
