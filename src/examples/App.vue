<template>
  <div class="container">
    <custom-delay />
    <indicators />
  </div>
</template>

<script>
import CustomDelay from './CustomDelay'
import Indicators from './Indicators'

export default {
  components: {
    CustomDelay,
    Indicators
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
</style>
