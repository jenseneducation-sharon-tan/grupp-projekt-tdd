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
  let wrapper, product, products, cart;

  beforeEach(() => {
    product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 };
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
      },
      localVue,
      router,
    });
  });

  it("should not appear 'Till kassan' button when cart is empty", async () => {
    const expected = false;
    await wrapper.setProps({ cart: [] });
    console.log(wrapper.props().cart);

    expect(wrapper.find(".tillKassa").exists()).toBe(expected);
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
});
