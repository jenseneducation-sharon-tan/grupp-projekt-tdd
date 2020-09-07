import { mount } from "@vue/test-utils";
import Vue from "vue";
import Home from "../../src/views/Home.vue";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";

// https://www.reddit.com/r/vuejs/comments/7ych8x/how_the_hell_do_you_reference_a_computed_property/

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
      },
    ],
  };

  it("should have $root receive data from main.js", /*async*/ () => {
    const vm = new Vue({
      data: data,
    });
    console.log(data);

    let computedProducts = vm.products;
    let expected = computedProducts.length;

    expect(expected).toBe(1);

    /* vm.$data === data; */
    /* const wrapper = mount(Home, { vm, stubs: ["router-link", "router-view"] });
    console.log(wrapper);
    // await window.trigger("keyup");
    let findProduct = wrapper.findComponent(ProductList);
    console.log(findProduct);
    let findFruit = findProduct.findAll("#allFruits").wrappers;
    console.log(findFruit);
    let elementCount = findFruit.length;
    console.log(elementCount); */
    /* expect(elementCount).toBe(data.products.length); */

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

/* import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";

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

    const wrapper = mount(Home, {
      parentComponent: $root,
    });

    /* const wrapper = mount(Home, { mocks: { $root } }); 

    // find the component where the list is
    const childComponentList = wrapper.findComponent(ProductList);

    // find the component where the prouct is being looped
    const childComponentProduct = childComponentList.findComponent(Product);

    // find the div where the prouct is displayed and make it an array
    const fruitList = childComponentProduct.findAll(".allFruits").wrapper;

    // count the element length
    let elementCount = fruitList.length;

    expect(elementCount).toBe($root.length);

    
  });
}); */
