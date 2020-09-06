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

  it("should hava $root receive data from main.js", () => {
    const vm = new Vue({
      data: data
    });
    console.log(data);

    let computedProducts = vm.products;
    let expected = computedProducts;

    expect(expected).toBe(data.products);
  });

  it("should have #allFruits div in Home.vue", () => {
    const vm = new Vue({
      mount: "#app",
      data: data
    });
    const wrapper = mount(Home, { vm, stubs: ["router-link", "router-view"] });
    let computedProducts = vm.products;
    console.log(computedProducts);

    let finProductList = wrapper.findComponent(ProductList);
    console.log(finProductList.props());
    let findFruits = finProductList.findAll("#allFruits");
    let elementCount = findFruits.length;
    expect(elementCount).toBe(1);
  });

  /*it('should have .fruit div in #allFruits', ()=>{
     //let getFruit = findFruits.findComponent(Product);
    //console.log(getFruit);
    //let fruitDiv = getFruit.findAll(".fruitName");
    //let fruitDiv = getFruit.findAll(".fruit");
  })*/

  //expect(wrapper.find(RouterLinkStub).props().to).toBe("/description/1");
});
