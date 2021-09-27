import { mount } from '@vue/test-utils'
import BaseParagraph from './BaseParagraph.vue'

describe('BaseParagraph', () => {
  test('shall be renderable', () => {
    const wrapper = mount(BaseParagraph)
    expect(wrapper.find('[data-test="base-paragraph"]').isVisible()).toBeTruthy()
  })

  test('shall have default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(BaseParagraph, {
      slots: {
        default: slotText,
      },
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
