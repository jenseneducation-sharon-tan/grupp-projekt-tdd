import {
  mount,
  shallowMount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";

import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import CartList from "@/components/CartList.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/");

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

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

  it("should render search bar and cartlist on page load at '/' ", async () => {
    let searchBar = wrapper.findComponent(SearchBar);

    let cartList = wrapper.findComponent(CartList);

    expect(searchBar).toBeTruthy();
    expect(cartList).toBeTruthy();
  });

  it("should get data from Header.vue in SearchBar.vue", () => {
    const Parent = {
      data() {
        return data;
      },
    };
    const wrapper = mount(Header, {
      localVue,
      router,
      parentComponent: Parent,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    let findSearchBar = wrapper.findComponent(SearchBar);

    let searchBarProps = findSearchBar.props();
    let searchBarLength = searchBarProps.products.length;

    expect(searchBarLength).toBe(data.products.length);
  });

  it("should NOT render search bar when it is not '/' ", async () => {
    const $route = {
      path: "/about",
    };

    const wrapper = shallowMount(Header, {
      stubs: ["router-link", "router-view"],
      mocks: {
        $route,
      },
    });

    let searchBar = wrapper.findComponent(SearchBar);

    expect(searchBar.exists()).toBeFalsy();
  });
});
