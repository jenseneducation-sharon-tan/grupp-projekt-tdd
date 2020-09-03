import { shallowMount, mount, RouterLinkStub, localVue } from "@vue/test-utils";
import Vue from "vue";
import Home from "../../src/views/Home.vue";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";
describe("Home", () => {
  let data = {
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
  };
  it("should renders data from main.js", async () => {
    const vm = new Vue({
      el: "#app",
      data: data
    });
    console.log(data);
    /* vm.$data === data; */
    const wrapper = mount(Home, { vm });
    console.log(wrapper);
    await window.trigger("keyup");
    let findProduct = wrapper.findComponent(ProductList);
    console.log(findProduct);
    let findFruit = findProduct.findAll(".allFruits").wrappers;
    console.log(findFruit);
    let elementCount = findFruit.length;
    expect(elementCount).toBe(data.products.length);
    /* const wrapper = mount(Home, { mocks: { $root } }); */
    /* wrapper.vm.$root = { data: true }; 
    const productListComponent = wrapper.findComponent(ProductList);
    //list of images
    const findProductComponent = productListComponent.findAllComponents(Product)
      .wrappers;
    console.log(findProductComponent);
    const hasImgId = findProductComponent[0].attributes("id");
    console.log(hasImgId);
    /*  await hasImgId.trigger("click"); 
    expect(hasImgId).toBe("1");
  /*it("should show id '1' when click on 'banan'", async () => {
    const wrapper = mount(Home, { products });
    const productListComponent = wrapper.findComponent(ProductList);
    //list of images
    const findProductComponent = productListComponent.findAllComponents(Product)
      .wrappers;
    console.log(findProductComponent);
    const hasImgId = findProductComponent[0].attributes("id");
    console.log(hasImgId);
    /*  await hasImgId.trigger("click"); 
    expect(hasImgId).toBe("1");
  }); 
  /* it("should show details about product when click on product in home page", async () => {
    const wrapper = mount(Home, {
      stubs: {
        RouterLink: RouterLinkStub,
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
                count: 0,
              },
            ],
          },
        },
      },
    });
    const img = wrapper.findAll(".fruit").wrappers;
    console.log(img);
    console.log(wrapper.html());
    const link = img.find((i) => i[0]);
    await link.trigger("click");
    expect(wrapper.find(RouterLinkStub).props().to).toBe("/description/1");
  }); */
  });
});
