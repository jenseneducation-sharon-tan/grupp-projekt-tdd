import { mount, RouterLinkStub } from "@vue/test-utils";
import Description from "../../src/views/Description.vue";

describe("Description", () => {
  it("should go back to home page when click on go home button", async () => {
    const wrapper = mount(Description, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const btn = wrapper.find("button");
    await btn.trigger("click");
    expect(wrapper.find(RouterLinkStub).props().to).toBe("/");
  });
});
