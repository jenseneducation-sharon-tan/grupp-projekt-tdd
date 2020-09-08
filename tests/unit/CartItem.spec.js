import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import CartItem from "@/components/CartItem.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/");

describe("CartItem", () => {
  let wrapper, product, product2, product3, products, cart;

  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 1 };

    product2 = { name: "Ananas", id: 2, price: 33, unit: "kg", count: 2 };
    product3 = { name: "Avokado", id: 3, price: 33, unit: "kg", count: 1 };

    cart = [product];
    products = [product];

    const FakeAppVue = {
      data() {
        return {
          cart,
          products,
        };
      },
    };

    wrapper = shallowMount(CartItem, {
      propsData: { cart: cart },
      parentComponent: FakeAppVue,
      stubs: {
        RouterLink: RouterLinkStub,
        Header: true,
        AddDeleteButton: true,
      },
      localVue,
      router,
    });
  });

  it("should display total amount of cart items", async () => {
    let wrapper;
    let cart = [product2, product3];
    wrapper = mount(CartItem, {
      data: () => ({
        totalValue: 0,
      }),
      propsData: { cart: cart },
      stubs: {
        RouterLink: RouterLinkStub,
        Header: true,
        AddDeleteButton: true,
      },
      localVue,
      router,
    });

    const expected = "Att betala:99 kr";
    let actual = wrapper.find(".total-price").text();
    expect(actual).toBe(expected);
  });

  it("should not appear 'Till kassan' button when cart is empty", async () => {
    const expected = false;
    await wrapper.setProps({ cart: [] });

    expect(wrapper.find(".tillKassa").exists()).toBe(expected);
  });

  it("should appear 'Till kassan' button when cart is more than 0", () => {
    const expected = true;
    expect(wrapper.find(".tillKassa").exists()).toBe(true);
  });

  it("should be empty i cart when clicking on 'Till kassan", async () => {
    //Arrange
    const expected = 0;
    const button = wrapper.find(".tillKassa");
    //Act
    await button.trigger("click");
    let actual = wrapper.vm.$root.$data.cart.length;

    //Assert
    expect(actual).toBe(expected);
  });

  it("should renders a router-link tag with to /", () => {
    //Arrange
    const expectedUrl = "/";
    const button = wrapper.findComponent(RouterLinkStub);

    //Assert
    expect(button.props("to")).toBe(expectedUrl);
  });
});
