import { mount } from '@vue/test-utils'
import BaconButton from './BaconButton.vue'

const wrapperOptions = {
  mocks: {
    $t () {
      return 'Placeholder'
    },
  },
}

describe('BaconButton', () => {
  test('is renderable', () => {
    const wrapper = mount(BaconButton, wrapperOptions)
    expect(wrapper.find('[data-test="bacon-button"]').isVisible()).toBeTruthy()
  })

  test('on click emits click', () => {
    const wrapper = mount(BaconButton, wrapperOptions)
    const button = wrapper.find('[data-test="bacon-button"]')
    button.trigger('click')
    const buttonClickCalls = wrapper.emitted('click')
    expect(buttonClickCalls).toHaveLength(1)
  })
})
