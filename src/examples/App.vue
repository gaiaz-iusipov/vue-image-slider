<template>
  <div>
    <p>Sample text</p>
    <sample-text />

    <p>Custom delay</p>
    <custom-delay />

    <p>Indicators</p>
    <indicators />
  </div>
</template>

<script>
import SampleText from './SampleText'
import CustomDelay from './CustomDelay'
import Indicators from './Indicators'

export default {
  components: {
    SampleText,
    CustomDelay,
    Indicators
  }
}
</script>

<style>
.image-slider {
  width: 300px;
  height: 300px;
}
</style>
