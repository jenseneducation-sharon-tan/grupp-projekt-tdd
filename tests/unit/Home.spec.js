import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Home", () => {
  let wrapper;
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
      {
        name: "Ananas",
        id: 3,
        image: "",
        price: 15,
        unit: "st",
        count: 0,
      },
      {
        name: "Avokado",
        id: 5,
        image: "",
        price: 10,
        unit: "st",
        count: 0,
      },
    ],
  };
  const Parent = {
    data() {
      return data;
    },
  };
  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
      router,
      parentComponent: Parent,
      stubs: {
        Header: true,
        Footer: true,
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("should get data from Home.vue in ProductList.vue", () => {
    /*  const Parent = {
      data() {
        return data;
      },
    };
    const wrapper = mount(Home, {
      localVue,
      router,
      parentComponent: Parent,
      stubs: {
        Header: true,
        Footer: true,
        RouterLink: RouterLinkStub,
      },
    }); */
    let findProductList = wrapper.findComponent(ProductList);
    let productlistProps = findProductList.props();
    let productListLength = productlistProps.products.length;

    expect(productListLength).toBe(data.products.length);
  });

  it("should get 'Banan' as product name from Productlist.vue ", () => {
    /*  const Parent = {
      data() {
        return data;
      },
    };
    const wrapper = mount(Home, {
      localVue,
      router,
      parentComponent: Parent,
      stubs: {
        Header: true,
        Footer: true,
        RouterLink: RouterLinkStub,
      },
    }); */
    let finProductList = wrapper.findComponent(ProductList);

    let findAllFruit = finProductList.findComponent(Product);

    let fruitName = findAllFruit.find(".fruitName").text();

    expect(fruitName).toBe("Banan");
  });

  /* it("should renders a router-link tag with to /about", async () => {
    //Arrange
   const expectedUrl = "/about"; 
  	const navLink = wrapper.find("nav"); 

    const routerLink = wrapper.findAll("router-link"); //array

    await routerLink.setData({ text: "Om oss" });
    console.log("router:", routerLink);

    /*   let hasOmOss = routerLink.some((link) => {
      console.log(1);
      link.text() === "Om oss";
      console.log(2);
    }); 

    //Assert
    expect(routerLink.at(0).vm.text).toBe("Om oss");
  });*/
});
