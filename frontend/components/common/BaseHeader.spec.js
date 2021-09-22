import { mount } from '@vue/test-utils'
import BaseHeader from './BaseHeader.vue'

describe('BaseHeader', () => {
  test('is renderable', () => {
    const wrapper = mount(BaseHeader, {
      propsData: {
        text: 'is renderable',
      },
    })
    expect(wrapper.find('[data-test="base-header"]').isVisible()).toBeTruthy()
  })

  test('has text prop & renders it', () => {
    const propText = 'This is prop test!'
    const wrapper = mount(BaseHeader, {
      propsData: {
        text: propText,
      },
    })
    expect(wrapper.html()).toContain(propText)
  })

  test('has type prop & renders it', () => {
    const wrapper = mount(BaseHeader, {
      propsData: {
        text: 'Text',
        type: 3,
      },
    })
    expect(wrapper.find('h3').isVisible()).toBeTruthy()
  })

  test('has type prop safety validation', () => {
    const wrapper = mount(BaseHeader, {
      propsData: {
        text: 'Text',
        type: 12,
      },
    })
    expect(wrapper.find('h1').isVisible()).toBeTruthy()
  })

  test('has type prop influence over class names', () => {
    const type = 3
    const wrapper = mount(BaseHeader, {
      propsData: {
        text: 'Text',
        type,
      },
    })
    const baseHeader = wrapper.find('[data-test="base-header"]')
    const baseHeaderClasses = baseHeader.classes()
    expect(baseHeaderClasses.toString()).toContain(`--${type}`)
  })
})
