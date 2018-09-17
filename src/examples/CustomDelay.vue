<template>
  <div>
    <image-slider
      v-model="slides"
      v-bind:delay="delay"
    />
  </div>
</template>

<script>
import ImageSlider from '@/App'

export default {
  data () {
    return {
      slides: [
        'https://dummyimage.com/300&text=1',
        'https://dummyimage.com/300&text=2',
        'https://dummyimage.com/300&text=3'
      ],
      delay: 2000
    }
  },
  components: {
    ImageSlider
  }
}
</script>
