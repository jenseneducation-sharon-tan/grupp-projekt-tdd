/* import { shallowMount, mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";
import Vue from "vue";

describe("Home", () => {
  it("should fetch data from $root ", async () => {
    const $root = [
      {
        name: "Banan",
        id: 1,
        image: "",
        price: 23,
        unit: "kg",
        count: 0,
      },
    ];

    const wrapper = mount(Home, { mocks: { $root } });

    // find the component where the list is
    const childComponentList = wrapper.findComponent(ProductList);

    // find the component where the prouct is being looped
    const childComponentProduct = childComponentList.findComponent(Product);

    // find the div where the prouct is displayed and make it an array
    const fruitList = childComponentProduct.findAll(".allFruits").wrapper;

    // count the element length
    let elementCount = fruitList.length;

    expect(elementCount).toBe($root.length); 

    /* const img = wrapper.findAll(".fruit").wrappers;
    console.log(img);
    console.log(wrapper.html());
    const link = img.find((i) => i[0]);
    await link.trigger("click"); 
    expect(wrapper.find(RouterLinkStub).props().to).toBe("/description/1");
  });
});*/
