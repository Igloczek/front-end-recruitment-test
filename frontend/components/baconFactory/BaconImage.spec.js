import { mount } from '@vue/test-utils'
import BaconImage from './BaconImage.vue'

describe('BaconImage', () => {
  test('is renderable', () => {
    const wrapper = mount(BaconImage)
    expect(wrapper.find('[data-test="bacon-image"]').isVisible()).toBeTruthy()
  })
})
