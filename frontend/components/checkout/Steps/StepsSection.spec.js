import { mount } from '@vue/test-utils'
import StepsSection from './StepsSection.vue'

describe('StepsSection', () => {
  test('is renderable', () => {
    const wrapper = mount(StepsSection, {
      propsData: {
        title: 'Is renderable',
      },
    })
    expect(wrapper.find('[data-test="steps-section"]').isVisible()).toBeTruthy()
  })

  describe('Slots', () => {
    test('has default slot', () => {
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

    test('has header-icon slot', () => {
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
    test('has title prop & renders it', () => {
      const propTitle = 'This is title test!'
      const wrapper = mount(StepsSection, {
        propsData: {
          title: propTitle,
        },
      })
      expect(wrapper.html()).toContain(propTitle)
    })

    test('has index prop & renders it', () => {
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
