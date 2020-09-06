import { shallowMount, mount } from "@vue/test-utils";
import CartItem from "@/components/CartItem.vue";

describe("CartItem", () => {
  let wrapper, product, cart;

  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 };
    cart = [product];

    const FakeAppVue = {
      data() {
        return {
          cart,
        };
      },
    };

    wrapper = shallowMount(CartItem, {
      propsData: { cart: cart },
      parentComponent: FakeAppVue,
    });
  });

  it("should be empty i cart when clicking on 'Till kassan", async () => {
    //Arrange
    const expected = 0;
    const button = wrapper.find(".tillKassa");

    //Act
    await button.trigger("click");
    let actual = cart.length;

    //Assert
    expect(actual).toBe(expected);
  });
});
