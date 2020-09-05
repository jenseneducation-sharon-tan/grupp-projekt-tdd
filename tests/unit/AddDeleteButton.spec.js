import { shallowMount, mount } from "@vue/test-utils";
import AddDeleteButton from "@/components/AddDeleteButton.vue";

describe("AddDeleteButton", () => {
  let wrapper1, wrapper2, product, product2, products, cart;
  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 };
    product2 = { name: "Ananas", id: 2, price: 33, unit: "kg", count: 0 };
    cart = [];
    products = [product, product2];
    const FakeAppVue = {
      data() {
        return {
          products,
          cart,
        };
      },
    };

    wrapper1 = shallowMount(AddDeleteButton, {
      propsData: { id: product.id },
      parentComponent: FakeAppVue,
    });
    wrapper2 = shallowMount(AddDeleteButton, {
      propsData: { id: product2.id },
      parentComponent: FakeAppVue,
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
    cart.push(product);
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
  // testa cart
  it("should add to cart when clicked addbutton", async () => {
    const button = wrapper1.find("#add");
    await button.trigger("click");
    expect(cart).toContainEqual(product);
  });

  it("should add one banan och one ananas to cart when clicked två olika addbutton", async () => {
    const expected = 2;
    const button1 = wrapper1.find("#add");
    await button1.trigger("click");
    const button2 = wrapper2.find("#add");
    await button2.trigger("click");
    expect(cart.length).toBe(expected);
  });
  it("should remove from cart when clicked deletebutton", async () => {
    cart.push(product);
    const button = wrapper1.find("#minus");
    await button.trigger("click");
    expect(cart).not.toContainEqual(product);
  });
});

/* import { shallowMount, mount } from "@vue/test-utils";
import AddDeleteButton from "@/components/AddDeleteButton.vue";

describe("AddDeleteButton", () => {
  let wrapper, product;
  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 };
    wrapper = shallowMount(AddDeleteButton, { propsData: { product } });
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
}); */
