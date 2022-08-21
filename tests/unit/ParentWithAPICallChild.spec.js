import { shallowMount, mount } from '@vue/test-utils'
import ParentWithApiCallChild from '@/components/ParentWithApiCallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

describe('ParentWithApiCallChild.vue', () => {
  it('rendes with mount and does initialize API call', () => {
    const wrapper = mount(ParentWithApiCallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    })

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithApiCallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})