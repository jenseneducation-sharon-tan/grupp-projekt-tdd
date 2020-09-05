
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
        count: 0,


    expect(wrapper.find(RouterLinkStub).props().to).toBe("/description/1");
  }); */
  });
});*/
