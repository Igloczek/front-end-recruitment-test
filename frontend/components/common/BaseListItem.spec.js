import { mount } from '@vue/test-utils'
import BaseListItem from './BaseListItem.vue'

describe('BaseListItem', () => {
  test('is renderable', () => {
    const wrapper = mount(BaseListItem)
    expect(wrapper.find('[data-test="base-list-item"]').isVisible()).toBeTruthy()
  })

  test('has default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(BaseListItem, {
      slots: {
        default: slotText,
      },
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
