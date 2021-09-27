import { mount } from '@vue/test-utils'
import BaseSelect from './BaseSelect.vue'

const defaultOptions = {
  propsData: {
    options: [
      ['DEFAULT', 'Default value'],
      ['CHANGED', 'Changed value'],
    ],
  },
}

describe('BaseSelect', () => {
  test('is renderable', () => {
    const wrapper = mount(BaseSelect, defaultOptions)
    expect(wrapper.find('[data-test="base-select"]').isVisible()).toBeTruthy()
  })

  test('can emit change', () => {
    const wrapper = mount(BaseSelect, defaultOptions)
    const options = wrapper.find('[data-test="base-select"]').findAll('option')
    options.at(1).setSelected()
    expect(wrapper.find('option:checked').element.value).toBe(defaultOptions.propsData.options[1][0])
  })
})
