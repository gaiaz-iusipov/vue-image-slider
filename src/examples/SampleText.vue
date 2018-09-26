<template>
  <div>
    <image-slider v-model="slides">
      Sample Text
    </image-slider>
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
      ]
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style>
.image-slider__content {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
}
</style>
