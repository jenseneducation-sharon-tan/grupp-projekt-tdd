import { mount } from "@vue/test-utils";
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

  it("should have get mock $root data in Home.vue", () => {
    const Parent = {
      data() {
        return data;
      }
    };
    const wrapper = mount(Home, { parentComponent: Parent });
    let finProductList = wrapper.findComponent(ProductList);
    let productlistProps = finProductList.props();
    console.log(productlistProps);
    let findAllFruit = finProductList.findComponent(Product);
    console.log(findAllFruit.props());
    let fruitList = findAllFruit.findAll(".fruit");
    let elementCount = fruitList.length;
    expect(elementCount).toBe(data.products.length);
  });
});
