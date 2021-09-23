import { mount } from '@vue/test-utils'
import SummaryHeader from './SummaryHeader.vue'

describe('SummaryHeader', () => {
  test('is renderable', () => {
    const wrapper = mount(SummaryHeader, {
      propsData: {
        text: 'is renderable',
      },
    })
    expect(wrapper.find('[data-test="summary-header"]').isVisible()).toBeTruthy()
  })

  test('has text prop & renders it', () => {
    const propText = 'This is prop test!'
    const wrapper = mount(SummaryHeader, {
      propsData: {
        text: propText,
      },
    })
    expect(wrapper.html()).toContain(propText)
  })

  test('has type prop & renders it', () => {
    const wrapper = mount(SummaryHeader, {
      propsData: {
        text: 'Text',
        type: 3,
      },
    })
    expect(wrapper.find('h3').isVisible()).toBeTruthy()
  })

  test('has type prop safety validation', () => {
    const wrapper = mount(SummaryHeader, {
      propsData: {
        text: 'Text',
        type: 12,
      },
    })
    expect(wrapper.find('h1').isVisible()).toBeTruthy()
  })

  test('has type prop influence over class names', () => {
    const wrapper = mount(SummaryHeader, {
      propsData: {
        text: 'Text',
        type: 3,
      },
    })
    const summaryHeader = wrapper.find('[data-test="summary-header"]')
    const summaryHeaderClasses = summaryHeader.classes()
    expect(summaryHeaderClasses).toHaveLength(2)
  })
})
