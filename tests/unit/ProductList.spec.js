import { shallowMount,mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe("Home", () => {
    let wrapper, data;
    beforeEach(() => {
      wrapper = mount(Home);
    });
    it("should have to show  8 products  when rendering", async () => {
      const expected = 8;
      const actual = wrapper.findAll(".fruit").length;
      expect(actual).toBe(expected);
    })
});