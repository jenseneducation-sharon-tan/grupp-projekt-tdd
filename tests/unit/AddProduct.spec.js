import { shallowMount,mount } from '@vue/test-utils'
import AddDeleteButton from '@/components/AddDeleteButton.vue'

describe("AddDeleteButton", () => {
    let wrapper,product
    beforeEach(() => {
        product= {name:"Banan",  id:1,price: 23, unit: "kg", count: 0}
         wrapper = shallowMount(AddDeleteButton,{propsData:{ product}})
    });
    it("should add 1 to counter when clicked", async () => {
      const expectedValue = 1;
      const button = wrapper.find('#add');
      await button.trigger('click');
      let actual = product.count
      expect(actual).toBe(expectedValue);
    })

it("should remove 1 from counter when clicked", async () => {
       product.count = 2
      const expectedValue = 1;
      const button = wrapper.find('#minus');
      await button.trigger('click');
      let actual = product.count
      expect(actual).toBe(expectedValue);
    })
    it("should not decrease below 0", async () => {
        product.count = 0
       const expectedValue = 0;
       const button = wrapper.find('#minus');
       await button.trigger('click');
       let actual = product.count
       expect(actual).toBe(expectedValue);
     })
});