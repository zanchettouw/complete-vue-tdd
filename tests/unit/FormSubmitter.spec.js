import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import FormSubmitter from '@/components/FormSubmitter.vue'

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url
      data = _data
      resolve()
    })
  }
}


describe('FormSubmitter', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = mount(FormSubmitter)

    wrapper.find('[data-username]').setValue('alice')
    wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()


    expect(wrapper.find('.message').text())
      .toBe('Thank you for your submission, alice.')
  })
})