import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import Child from '@/components/Child.vue'

describe('Parent', () => {
  it('check diffence between mount and shallowMount', () => {
    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)

    const shallowChildWrapper = shallowMount(Child)
    const mountChildWrapper = mount(Child)

    console.log('parent shallow', shallowWrapper.html())
    console.log('parent mount', mountWrapper.html())
    console.log('child shallow', shallowChildWrapper.html())
    console.log('child mount', mountChildWrapper.html())
  })
})