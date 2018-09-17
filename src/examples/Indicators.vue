<template>
  <div>
    <image-slider v-model="slides">
      <div slot="indicator" slot-scope="{ indicator }" />
    </image-slider>
  </div>
</template>

<script>
import ImageSlider from '@/App'

export default {
  data () {
    return {
      slides: [
        'https://placeimg.com/300/300/animals',
        'https://placeimg.com/300/300/arch',
        'https://placeimg.com/300/300/nature',
        'https://placeimg.com/300/300/people'
      ]
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style>
.image-slider__indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
}
.image-slider__indicator_active {
  background-color: white;
}
.image-slider__indicator_loading {
  background-color: white;
  animation: fadeIn 0.3s infinite alternate;
}
@keyframes fadeIn {
  from { opacity: 0; }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
