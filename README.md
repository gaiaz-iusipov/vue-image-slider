# vue-image-slider

[![npm](https://img.shields.io/npm/v/@gaiaz/vue-image-slider.svg)](https://www.npmjs.com/package/@gaiaz/vue-image-slider)
[![npm](https://img.shields.io/npm/dt/@gaiaz/vue-image-slider.svg)](https://www.npmjs.com/package/@gaiaz/vue-image-slider)
[![GitHub](https://img.shields.io/github/license/gaiaz-iusipov/vue-image-slider.svg)](https://github.com/gaiaz-iusipov/vue-image-slider#license)
[![CircleCI](https://circleci.com/gh/gaiaz-iusipov/vue-image-slider.svg?style=svg)](https://circleci.com/gh/gaiaz-iusipov/vue-image-slider)

Vue.js simple image slider component

## Installation

**Yarn**

```bash
yarn add @gaiaz/vue-image-slider
```

**npm**

```bash
npm install @gaiaz/vue-image-slider --save
```

## Usage

> See also [examples](https://github.com/gaiaz-iusipov/vue-image-slider/tree/master/src/examples)

```html
<template>
  <div>
    <image-slider v-model="slides" />
  </div>
</template>

<script>
import ImageSlider from '@gaiaz/vue-image-slider'
import '@gaiaz/vue-image-slider/dist/image-slider.css'

export default {
  data () {
    return {
      slides: [
        'https://dummyimage.com/300&text=1',
        'https://dummyimage.com/300&text=2'
      ]
    }
  },
  components: {
    ImageSlider
  }
}
</script>
```

## Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn run serve
```

### Compiles and minifies for production
```bash
yarn run build
```

### Lints and fixes files
```bash
yarn run lint
```

### Run unit tests
```bash
yarn run test:unit
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Gaiaz Iusipov](https://github.com/gaiaz-iusipov)
