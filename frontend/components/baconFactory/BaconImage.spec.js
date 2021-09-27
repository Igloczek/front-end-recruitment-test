import { mount } from '@vue/test-utils'
import BaconImage from './BaconImage.vue'

const wrapperOptions = {
  mocks: {
    $t () {
      return 'Placeholder'
    },
  },
}

describe('BaconImage', () => {
  test('shall be renderable', () => {
    const wrapper = mount(BaconImage, wrapperOptions)
    expect(wrapper.find('[data-test="bacon-image"]').isVisible()).toBeTruthy()
  })
})
