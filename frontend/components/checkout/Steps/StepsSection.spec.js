import { mount } from '@vue/test-utils'
import StepsSection from './StepsSection.vue'

describe('StepsSection', () => {
  test('shall be renderable', () => {
    const wrapper = mount(StepsSection, {
      propsData: {
        title: 'Is renderable',
      },
    })
    expect(wrapper.find('[data-test="steps-section"]').isVisible()).toBeTruthy()
  })

  describe('Slots', () => {
    test('shall have default slot', () => {
      const slotText = 'This is slot test!'
      const wrapper = mount(StepsSection, {
        propsData: {
          title: 'Is renderable',
        },
        slots: {
          default: slotText,
        },
      })
      expect(wrapper.html()).toContain(slotText)
    })

    test('shall have header-icon slot', () => {
      const slotText = 'This is header-icon test!'
      const wrapper = mount(StepsSection, {
        propsData: {
          title: 'Is renderable',
        },
        slots: {
          'header-icon': slotText,
        },
      })
      expect(wrapper.html()).toContain(slotText)
    })
  })

  describe('Props', () => {
    test('shall have title prop & renders it', () => {
      const propTitle = 'This is title test!'
      const wrapper = mount(StepsSection, {
        propsData: {
          title: propTitle,
        },
      })
      expect(wrapper.html()).toContain(propTitle)
    })

    test('shall have index prop & renders it', () => {
      const propIndex = 12124234
      const wrapper = mount(StepsSection, {
        propsData: {
          index: propIndex,
          title: 'Is renderable',
        },
      })
      expect(wrapper.html()).toContain(propIndex.toString())
    })
  })
})
