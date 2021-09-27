import { mount } from '@vue/test-utils'
import SummaryText from './SummaryText.vue'

describe('SummaryText', () => {
  test('shall be renderable', () => {
    const wrapper = mount(SummaryText, {
      propsData: {
        name: 'Name',
        value: 900,
      },
    })
    expect(wrapper.find('[data-test="summary-text"]').isVisible()).toBeTruthy()
  })

  test('shall have name prop & renders it', () => {
    const propText = 'This is prop name test!'
    const wrapper = mount(SummaryText, {
      propsData: {
        name: propText,
        value: 900,
      },
    })
    expect(wrapper.html()).toContain(propText)
  })

  test('shall have value prop & renders it', () => {
    const propValue = 900
    const wrapper = mount(SummaryText, {
      propsData: {
        name: 'Name',
        value: propValue,
      },
    })
    expect(wrapper.html()).toContain(propValue.toString())
  })

  test('shall have decimalNumber prop & use it', () => {
    const propValue = 900
    const wrapper = mount(SummaryText, {
      propsData: {
        name: 'Name',
        value: propValue,
        decimalNumbers: 3,
      },
    })
    expect(wrapper.html()).toContain('900.000')
  })
})
