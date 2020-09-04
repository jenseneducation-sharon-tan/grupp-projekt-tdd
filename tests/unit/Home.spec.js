import { mount, RouterLinkStub } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home", () => {
  it("should show details about product when click on product in home page", async () => {
    const wrapper = mount(Home, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      mocks: {
        $root: {
          data: {
            products: [
              {
                name: "Banan",
                id: 1,
                image: "",
                price: 23,
                unit: "kg",
                count: 0
              }
            ]
          }
        }
      }
    });
    const img = wrapper.findAll(".fruit").wrappers;
    console.log(img);
    console.log(wrapper.html());
    const link = img.find(i => i[0]);
    await link.trigger("click");
    expect(wrapper.find(RouterLinkStub).props().to).toBe("/description/1");
  });
});
