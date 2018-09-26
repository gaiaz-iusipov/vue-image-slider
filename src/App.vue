<template>
  <div
    class="image-slider"
    v-if="!empty"
  >
    <transition name="fade" mode="in-out">
      <div
        class="image-slider__slide"
        v-bind:key="active"
        v-bind:style="`background-image: url('${images[active]}');`"
        v-if="active !== null"
      />
    </transition>
    <div class="image-slider__content" v-if="hasDefaultSlot" v-once>
      <slot />
    </div>
    <div
      class="image-slider__overlay"
      v-on:click="show(next)"
      v-on:mouseover="stop"
      v-on:mouseleave="start"
      v-once
    />
    <div class="image-slider__footer ">
      <div
        class="image-slider__indicator"
        v-bind:class="{
          'image-slider__indicator_active': indicator.active,
          'image-slider__indicator_inactive': !indicator.active,
          'image-slider__indicator_loading': indicator.loading
        }"
        v-for="(indicator, index) in indicators"
        v-bind:key="index"
        v-on:click.stop="show(index)"
        v-if="hasIndicatorsSlot"
      >
        <slot name="indicator" v-bind:indicator="indicator" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true
    },
    delay: {
      type: Number,
      default () { return 3000 }
    }
  },
  data () {
    return {
      images: this.value || [],
      active: null,
      loading: null
    }
  },
  watch: {
    value (value) {
      this.images = value || []
    },
    images (value) {
      if (value.length === 1) {
        this.stop()
      }
    }
  },
  computed: {
    empty () {
      return this.images.length === 0
    },
    prev () {
      if (this.images.length < 2) {
        return null
      }

      if (this.active === 0) {
        return this.last
      }

      return this.active - 1
    },
    next () {
      if (this.images.length < 2) {
        return null
      }

      if (this.active === this.last) {
        return 0
      }

      return this.active + 1
    },
    last () {
      if (this.empty) {
        return null
      }

      return this.images.length - 1
    },
    hasDefaultSlot () {
      return !!this.$slots['default']
    },
    hasIndicatorsSlot () {
      return !!this.$scopedSlots['indicator']
    },
    indicators () {
      return this.images.map((image, index) => ({
        active: index === this.active,
        loading: index === this.loading
      }))
    }
  },
  created () {
    this.interval = null
  },
  mounted () {
    this.show(0)
    this.start()
  },
  methods: {
    start () {
      if (this.interval !== null) {
        return
      }

      if (this.images.length < 2) {
        return
      }

      this.interval = window.setInterval(() => this.show(this.next), this.delay)
    },
    stop () {
      if (this.interval === null) {
        return
      }

      window.clearInterval(this.interval)
      this.interval = null
    },
    async show (index) {
      if (this.active === index) {
        return
      }

      try {
        await this.loadImage(index)
      } catch (error) {
        this.remove(index)
        this.show(this.next)
        return
      }

      this.active = index
    },
    remove (index) {
      this.images.splice(index, 1)
      this.$emit('input', this.images)
    },
    loadImage (index) {
      const url = this.images[index]

      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url

        if (image.compleate || image.naturalHeight !== 0) {
          resolve()
          return
        }

        this.stop()
        this.loading = index

        image.addEventListener('load', event => {
          this.loading = null
          this.start()
          resolve()
        })
        image.addEventListener('error', event => {
          this.start()
          reject(new Error(`Failed to load image's URL: ${url}`))
        })
      })
    }
  }
}
</script>

<style scoped>
.image-slider {
  position: relative;
}
.image-slider__slide,
.image-slider__content,
.image-slider__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.image-slider__slide {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.image-slider__footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.image-slider__indicator {
  margin: .5rem .2rem;
  cursor: pointer;
}
</style>
