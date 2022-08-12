import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Gretting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)

    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})