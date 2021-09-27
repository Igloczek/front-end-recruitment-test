import { mount } from '@vue/test-utils'
import BaseArticle from './BaseArticle.vue'

describe('BaseArticle', () => {
  test('shall be renderable', () => {
    const wrapper = mount(BaseArticle)
    expect(wrapper.find('[data-test="base-article"]').isVisible()).toBeTruthy()
  })

  test('shall have default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(BaseArticle, {
      slots: {
        default: slotText,
      },
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
