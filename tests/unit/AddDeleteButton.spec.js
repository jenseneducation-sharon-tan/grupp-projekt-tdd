import { shallowMount, mount } from "@vue/test-utils";
import AddDeleteButton from "@/components/AddDeleteButton.vue";

describe("AddDeleteButton", () => {

  let wrapper1, wrapper2, product, product2,products,cart

  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 };
    product2 = { name: "Ananas", id: 2, price: 33, unit: "kg", count: 0 };
    cart =[] 
    products =[product,product2] 
    const FakeAppVue = {
      data() {
        return {
          products,
          cart
        }
      }
    }
    
    wrapper1 = shallowMount(AddDeleteButton, { 
      propsData: { id:product.id } ,
      parentComponent: FakeAppVue
    });
    wrapper2 = shallowMount(AddDeleteButton, { 
      propsData: { id:product2.id } ,
      parentComponent: FakeAppVue
    });
    
  });
  it("should add 1 to counter when clicked", async () => {
    const expectedValue = 1;
    const button = wrapper1.find("#add");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue); 
  });

  it("should remove 1 from counter when clicked", async () => {
    product.count = 2; 
    cart.push(product)
    const expectedValue = 1;
    const button = wrapper1.find("#minus");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue);
  }); 
  it("should not decrease below 0", async () => {
    product.count = 0;
    const expectedValue = 0;
    const button = wrapper1.find("#minus");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue);
  });

