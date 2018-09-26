import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const images = [
  'https://dummyimage.com/100&text=1',
  'https://dummyimage.com/300&text=2',
  'https://dummyimage.com/300&text=3'
]

const contentSlot = {
  default: 'content'
}

const indicatorSlot = {
  indicator: '<div />'
}

const factory = (images = [], slots = {}, scopedSlots = {}) => {
  return shallowMount(App, {
    propsData: { value: images },
    slots,
    scopedSlots
  })
}

describe('snapshots', () => {
  it('empty', () => {
    const wrapper = factory()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('inactive', () => {
    const wrapper = factory(images)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('with content', () => {
    const wrapper = factory(images, contentSlot)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('with images', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 0 })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('with images and indicators', () => {
    const wrapper = factory(images, {}, indicatorSlot)
    wrapper.setData({ active: 0 })

    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('props', () => {
  it('value is required', () => {
    const wrapper = factory()
    const prop = wrapper.vm.$options.props.value

    expect(prop.required).toBeTruthy()
  })

  it('value is of type array', () => {
    const wrapper = factory()
    const prop = wrapper.vm.$options.props.value

    expect(prop.type).toBe(Array)
  })
})

describe('data', () => {
  it('images equal value', () => {
    const wrapper = factory(images)

    expect(wrapper.vm.images).toEqual(images)
  })
})

describe('computed properties', () => {
  it('prev equals null', () => {
    const wrapper = factory([images[0]])

    expect(wrapper.vm.prev).toBeNull()
  })

  it('prev equals last index', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 0 })

    expect(wrapper.vm.prev).toEqual(images.length - 1)
  })

  it('prev equals previous index', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 1 })

    expect(wrapper.vm.prev).toEqual(0)
  })

  it('next equals null', () => {
    const wrapper = factory([images[0]])

    expect(wrapper.vm.next).toBeNull()
  })

  it('next equals first index', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: images.length - 1 })

    expect(wrapper.vm.next).toEqual(0)
  })

  it('next equals next index', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 0 })

    expect(wrapper.vm.next).toEqual(1)
  })

  it('last equals null', () => {
    const wrapper = factory()

    expect(wrapper.vm.last).toBeNull()
  })

  it('last equals last index', () => {
    const wrapper = factory(images)

    expect(wrapper.vm.last).toEqual(images.length - 1)
  })

  it('hasDefaultSlot equals false', () => {
    const wrapper = factory(images)

    expect(wrapper.vm.hasDefaultSlot).toBeFalsy()
  })

  it('hasIndicators equals true', () => {
    const wrapper = factory(images, contentSlot)

    expect(wrapper.vm.hasDefaultSlot).toBeTruthy()
  })

  it('hasIndicators equals false', () => {
    const wrapper = factory(images)

    expect(wrapper.vm.hasIndicatorsSlot).toBeFalsy()
  })

  it('hasIndicators equals true', () => {
    const wrapper = factory(images, {}, indicatorSlot)

    expect(wrapper.vm.hasIndicatorsSlot).toBeTruthy()
  })

  it('indicators has same size of images', () => {
    const wrapper = factory(images, {}, indicatorSlot)

    expect(wrapper.vm.indicators).toHaveLength(images.length)
  })
})

describe('rendering', () => {
  it('empty element', () => {
    const wrapper = factory()

    expect(wrapper.isEmpty()).toBeTruthy()
  })

  it('slide element is not exists', () => {
    const wrapper = factory(images)

    expect(wrapper.find('.image-slider__slide').exists()).toBeFalsy()
  })

  it('slide element is exists', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 0 })

    expect(wrapper.find('.image-slider__slide').exists()).toBeTruthy()
  })

  it('slide element is empty', () => {
    const wrapper = factory(images)
    wrapper.setData({ active: 0 })

    expect(wrapper.find('.image-slider__slide').isEmpty()).toBeTruthy()
  })

  it('content element is not exists', () => {
    const wrapper = factory(images)

    expect(wrapper.find('.image-slider__content').exists()).toBeFalsy()
  })

  it('content element is exists', () => {
    const wrapper = factory(images, contentSlot)

    expect(wrapper.find('.image-slider__content').exists()).toBeTruthy()
  })

  it('content element equals slot', () => {
    const wrapper = factory(images, contentSlot)

    expect(wrapper.find('.image-slider__content').text()).toEqual(contentSlot.default)
  })

  it('overlay element is exists', () => {
    const wrapper = factory(images)

    expect(wrapper.find('.image-slider__overlay').exists()).toBeTruthy()
  })

  it('footer element is exists', () => {
    const wrapper = factory(images)

    expect(wrapper.find('.image-slider__footer').exists()).toBeTruthy()
  })

  it('footer element is empty', () => {
    const wrapper = factory(images)

    expect(wrapper.find('.image-slider__footer').isEmpty()).toBeTruthy()
  })

  it('indicator elements are exist', () => {
    const wrapper = factory(images, {}, indicatorSlot)

    expect(wrapper.findAll('.image-slider__indicator')).toHaveLength(images.length)
  })
})
