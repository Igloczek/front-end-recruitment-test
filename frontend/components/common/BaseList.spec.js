import { mount } from '@vue/test-utils'
import BaseList from './BaseList.vue'

describe('BaseList', () => {
  test('shall be renderable', () => {
    const wrapper = mount(BaseList)
    expect(wrapper.find('[data-test="base-list"]').isVisible()).toBeTruthy()
  })

  test('shall have default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(BaseList, {
      slots: {
        default: slotText,
      },
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
