<template>
  <div class="container">
    <image-slider-view v-model="dummyimageSlides" v-bind:delay="2000" />

    <image-slider-view v-model="placeimgSlides">
      <div slot="indicator" slot-scope="{ indicator }" />
    </image-slider-view>
  </div>
</template>

<script>
import ImageSliderView from '@/App'

export default {
  data () {
    return {
      dummyimageSlides: [
        'https://dummyimage.com/300&text=1',
        'https://dummyimage.com/300&text=2',
        'https://dummyimage.com/300&text=3'
      ],
      placeimgSlides: [
        'https://placeimg.com/300/300/animals',
        'https://placeimg.com/300/300/arch',
        'https://placeimg.com/300/300/nature',
        'https://placeimg.com/300/300/people'
      ]
    }
  },
  components: {
    ImageSliderView
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
.image-slider {
  width: 300px;
  height: 300px;
}
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
