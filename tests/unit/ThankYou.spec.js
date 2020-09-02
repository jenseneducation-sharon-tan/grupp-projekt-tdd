import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";

import ThankYou from "@/views/ThankYou.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push("/");

describe("ThankYou", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ThankYou, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should renders a router-link tag with to /", async () => {
    //Arrange
    const expectedUrl = "/";
    const button = wrapper.findComponent(RouterLinkStub);

    //Assert
    expect(button.props("to")).toBe(expectedUrl);
  });

  //it("should redirect to '/' when clicking on 'Till butiken' button", async () => {
  // console.log(wrapper.vm.$route); // innehåller information om routes
  // //Arrange
  // const expectedUrl = "http://localhost:8080/";
  // const button = wrapper.find(RouterLinkStub);
  // // Act
  // await button.trigger("click");
  // //Assert
  // expect(button.props("to")).toBe(expectedUrl);
  //});
});
