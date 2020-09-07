import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Description from "../../src/views/Description.vue";

describe("Product", () => {
  let product;
  let wrapper;

  let data = {
    products: [
      {
        name: "Banan",
        id: 1,
        image: "",
        price: 23,
        unit: "kg",
        count: 0,
      },
      {
        name: "Ananas",
        id: 3,
        image: "",
        price: 15,
        unit: "st",
        count: 0,
      },
      {
        name: "Avokado",
        id: 5,
        image: "",
        price: 10,
        unit: "st",
        count: 0,
      },
    ],
  };

  beforeEach(() => {
    product = {
      name: "Banan",
      id: 1,
      image: "",
      price: 23,
      unit: "kg",
      count: 0,
    };

    const Parent = {
      data() {
        return data;
      },
    };
    wrapper = mount(Description, {
      parentComponent: Parent,
      mocks: {
        $route: {
          path: "/description/1",
          params: { id: "1" },
        },
      },
      propsData: { product: product },
      stubs: {
        RouterLink: RouterLinkStub,
        AddDeleteButton: true,
        Header: true,
        Footer: true,
      },
    });
  });

  it("should display product info", () => {
    console.log(wrapper.vm.$route);
    //expect(wrapper.vm.$route.params.id).toBe("1");

    //console.log(wrapper.props());
    const expected = wrapper.find(".name").text();
    //const link = wrapper.findComponent(RouterLinkStub);
    //expect(link.props("to")).toBe(expected);
    expect(expected).toBe(product.name);
  });
});
