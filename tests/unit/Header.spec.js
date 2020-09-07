import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";

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

  it("should render search bar and cartlist on page load at '/' ", async () => {
    let searchBar = wrapper.findComponent(SearchBar);

    let cartList = wrapper.findComponent(CartList);

    expect(searchBar).toBeTruthy();
    expect(cartList).toBeTruthy();
  });

  it("should NOT render search bar when it is not '/' ", async () => {
    let searchBar = wrapper.findComponent(SearchBar);

    let cartList = wrapper.findComponent(CartList);

    expect(searchBar).toBeTruthy();
    expect(cartList).toBeTruthy();
  });
});
