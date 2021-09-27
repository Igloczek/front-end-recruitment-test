import { mount } from '@vue/test-utils'
import BaseInput from './BaseInput.vue'

describe('BaseInput', () => {
  test('shall be renderable', () => {
    const wrapper = mount(BaseInput)
    expect(wrapper.find('[data-test="base-input"]').isVisible()).toBeTruthy()
  })

  test('shall maska emit input', () => {
    const wrapper = mount(BaseInput)
    wrapper.trigger('maska')
    const inputCallsLength = wrapper.emitted('input').length
    expect(inputCallsLength).toBeGreaterThanOrEqual(1)
  })
})
