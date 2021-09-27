import { mount } from '@vue/test-utils'
import StepsButtonSubmit from './StepsButtonSubmit.vue'

jest.mock('../../../assets/images/cart.svg')

const wrapperOptions = {
  mocks: {
    $t () {
      return 'Placeholder'
    },
  },
}

describe('StepsButtonSubmit', () => {
  test('is renderable', () => {
    const wrapper = mount(StepsButtonSubmit, wrapperOptions)
    expect(wrapper.find('[data-test="steps-button-submit"]').isVisible()).toBeTruthy()
  })

  test('click send submit', () => {
    const wrapper = mount(StepsButtonSubmit, wrapperOptions)
    wrapper.trigger('click')
    const buttonClickedCalls = wrapper.emitted('submit')
    expect(buttonClickedCalls).toHaveLength(1)
  })
})
