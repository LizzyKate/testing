import { mount } from '@vue/test-utils'
import Root from '@/components/root'

describe('that that root components will be mounted', () => {
  test('should show a title of the application', () => {
    const wrapper = mount(Root)
    console.log(JSON.stringify(wrapper))
    const x = wrapper.element.querySelector('h1')
    console.log(x.textContent)
    expect(wrapper.text()).toContain('ist')
  })

  test('should show attachedToDocument', () => {
    const wrapper = mount(Root)
    console.log(JSON.stringify(wrapper))
    const x = wrapper.options.attachedToDocument
    expect(x).toBeFalsy()
  })

  test('should show Selector', () => {
    const wrapper = mount(Root)
    console.log(JSON.stringify(wrapper))
    const x = wrapper.findAll('li')
    console.log(x.length)
    expect(x.length).toBe(2)
  })
})
