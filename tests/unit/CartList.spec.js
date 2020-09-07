import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";

import CartList from "@/components/CartList.vue";

import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/ShoppingBag");

describe("CartList", () => {
  let wrapper, product,products;

  beforeEach(() => {
	product = { name: "Banan", id: 1, price: 23, unit: "kg", count: 0 }
	
    products = [product ];
    const Parent = {
      data() {
        return {
          products,
        };
      },
    };
    wrapper = shallowMount(CartList, {
      propsData: { products },
      parentComponent: Parent,
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });
  it("should go  to /ShoppingBag  when click on cart icon", async () => {
    const expected = "/ShoppingBag";
    const button = wrapper.findComponent(RouterLinkStub);
    //await button.trigger("click");

    expect(button.props("to")).toBe(expected);
  });
});
