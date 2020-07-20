import { mount } from '@vue/test-utils'
import sum from '@/components/sum'

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    const wrapper = mount(sum)
    let x = wrapper.selector.methods
    console.log(x, '********')
    // const sum = (b, a) => b + a
    // expect(sum(1, 2)).toBe(3)
  })
})
