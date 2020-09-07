import { mount } from "@vue/test-utils";

import ShoppingBag from "@/views/ShoppingBag.vue";

describe("shoppingBag", () => {
  let wrapper, product, product2, products, cart;
  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 1 };
    product2 = { name: "Ananas", id: 2, price: 33, unit: "kg", count: 2 };
    cart = [product, product2];
    products = [product, product2];

    const FakeAppVue = {
      data() {
        return {
          products,
          cart,
        };
      },
    };

    wrapper = mount(ShoppingBag, {
      parentComponent: FakeAppVue,
      stubs: {
        "router-link": true,
        Header: true,
        Footer: true,
      },
    });
  });
  it("should remove product from cart when clicked", async () => {
    const expectedValue = 0;
    const button = wrapper.find(".deleteIcon");
    await button.trigger("click");
    let actual = product.count;
    expect(actual).toBe(expectedValue);
  });

  //test cart
  it("should remove from cart when clicked Removebutton", async () => {
    const button = wrapper.find(".deleteIcon");
    await button.trigger("click");
    expect(cart).not.toContainEqual(product);
  });
  it("should remove only one from Shoppingcart when there are two products and clicked Removebutton", async () => {
    const button = wrapper.find(".deleteIcon");
    await button.trigger("click");
    expect(cart).toContainEqual(product2);
  });
});
