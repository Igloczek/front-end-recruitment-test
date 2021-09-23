import { mount } from '@vue/test-utils'
import SummarySection from './SummarySection.vue'

describe('SummarySection', () => {
  test('is renderable', () => {
    const wrapper = mount(SummarySection, {
      slots: {
        default: 'is renderable',
      },
    })
    expect(wrapper.find('[data-test="summary-section"]').isVisible()).toBeTruthy()
  })

  test('has default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(SummarySection, {
      slots: {
        default: slotText,
      },
    })
    expect(wrapper.html()).toContain(slotText)
  })

  test('has featured prop influence over class names', () => {
    const wrapper = mount(SummarySection, {
      propsData: {
        featured: true,
      },
      slots: {
        default: 'is renderable',
      },
    })
    const summarySection = wrapper.find('[data-test="summary-section"]')
    const summarySectionClasses = summarySection.classes()
    expect(summarySectionClasses).toHaveLength(2)
  })
})
