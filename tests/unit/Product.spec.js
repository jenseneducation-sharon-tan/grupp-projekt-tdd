import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Product from "@/components/Product.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(VueRouter);
const router = new VueRouter();
router.push("/description/1");

describe("Product", () => {
  let product = {
    name: "Banan",
    id: 1,
    image: "",
    price: 23,
    unit: "kg",
    count: 0
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Product, {
      localVue,
      router: router,
      propsData: { product: product },
      stubs: {
        RouterLink: RouterLinkStub,
        AddDeleteButton: true
      }
    });
  });

  it("should go to /description/1", () => {
    console.log(wrapper.props());
    const expected = "/description/1";
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toBe(expected);
  });
});
