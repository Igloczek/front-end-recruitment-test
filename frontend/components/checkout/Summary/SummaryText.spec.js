import { mount } from '@vue/test-utils'
import SummaryText from './SummaryText.vue'

describe('SummaryText', () => {
  test('is renderable', () => {
    const wrapper = mount(SummaryText, {
      propsData: {
        name: 'Name',
        value: 'Value',
      },
    })
    expect(wrapper.find('[data-test="summary-text"]').isVisible()).toBeTruthy()
  })

  test('has name prop & renders it', () => {
    const propText = 'This is prop name test!'
    const wrapper = mount(SummaryText, {
      propsData: {
        name: propText,
        value: 'Value',
      },
    })
    expect(wrapper.html()).toContain(propText)
  })

  test('has value prop & renders it', () => {
    const propText = 'This is prop value test!'
    const wrapper = mount(SummaryText, {
      propsData: {
        name: 'Name',
        value: propText,
      },
    })
    expect(wrapper.html()).toContain(propText)
  })
})
