import { mount } from '@vue/test-utils'
import StepsFormWrapper from './StepsFormWrapper.vue'

const renderableProps = {
  label: 'Is renderable',
  inputName: 'Is renderable',
}

describe('StepsFormWrapper', () => {
  test('is renderable', () => {
    const wrapper = mount(StepsFormWrapper, {
      propsData: renderableProps,
    })
    expect(wrapper.find('[data-test="steps-form-wrapper"]').isVisible()).toBeTruthy()
  })

  describe('Slots', () => {
    test('has default slot', () => {
      const slotText = 'This is slot test!'
      const wrapper = mount(StepsFormWrapper, {
        propsData: renderableProps,
        slots: {
          default: slotText,
        },
      })
      expect(wrapper.html()).toContain(slotText)
    })

    test('has additional-info slot', () => {
      const slotText = 'This is additional-info test!'
      const wrapper = mount(StepsFormWrapper, {
        propsData: renderableProps,
        slots: {
          'additional-info': slotText,
        },
      })
      expect(wrapper.html()).toContain(slotText)
    })
  })

  describe('Props', () => {
    test('has label prop & renders it', () => {
      const propTitle = 'This is label test!'
      const wrapper = mount(StepsFormWrapper, {
        propsData: {
          ...renderableProps,
          label: propTitle,
        },
      })
      expect(wrapper.html()).toContain(propTitle)
    })

    test('has inputName prop & assign it to attrs', () => {
      const propInputName = 'input-name'
      const wrapper = mount(StepsFormWrapper, {
        propsData: {
          ...renderableProps,
          inputName: propInputName,
        },
      })
      expect(wrapper.find(`[for="${propInputName}"]`).isVisible()).toBeTruthy()
    })

    test('has wrapper one class', () => {
      const wrapper = mount(StepsFormWrapper, {
        propsData: renderableProps,
      })
      const formWrapper = wrapper.find('[data-test="steps-form-wrapper"]')
      const formWrapperClasses = formWrapper.classes()
      expect(formWrapperClasses).toHaveLength(1)
    })

    test('has isError prop influence over class names', () => {
      const wrapper = mount(StepsFormWrapper, {
        propsData: {
          ...renderableProps,
          isError: true,
        },
      })
      const formWrapper = wrapper.find('[data-test="steps-form-wrapper"]')
      const formWrapperClasses = formWrapper.classes()
      expect(formWrapperClasses).toHaveLength(2)
    })
  })
})
