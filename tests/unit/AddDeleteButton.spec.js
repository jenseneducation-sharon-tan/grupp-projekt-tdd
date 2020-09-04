import { shallowMount, mount } from "@vue/test-utils";
import AddDeleteButton from "@/components/AddDeleteButton.vue";

describe("AddDeleteButton", () => {
  let wrapper, product, product2,products,cart
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
    
    wrapper = shallowMount(AddDeleteButton, { 
      propsData: { id:product.id } ,
      parentComponent: FakeAppVue
    });
    //wrapper.vm.$root = {$data:{products,cart}}
    //wrapper.vm.$forceUpdate();
  });
  it("should add 1 to counter when clicked", async () => {
    const expectedValue = 1;
    const button = wrapper.find("#add");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue); 
  });

  it("should remove 1 from counter when clicked", async () => {
    product.count = 2; 
    cart.push(product)
    const expectedValue = 1;
    const button = wrapper.find("#minus");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue);
  }); 
  it("should not decrease below 0", async () => {
    product.count = 0;
    const expectedValue = 0;
    const button = wrapper.find("#minus");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue);
  });
   // testa cart 
   it("should add to cart when clicked addbutton", async () => {
     
    const button = wrapper.find("#add");
    await button.trigger("click");
    expect(cart).toContainEqual(product); 
  });

it("should remove from cart when clicked deletebutton", async () => {
     cart.push(product)
    const button = wrapper.find("#minus");
    await button.trigger("click");
    expect(cart).not.toContainEqual(product); 
  });


}); 
