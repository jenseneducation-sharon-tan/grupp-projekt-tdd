import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import Product from "@/components/Product.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("ProductList", () => {
  it("should have to show  8 products  when rendering", async () => {
    let wrapper, products;
    products = [
      { name: "Banan", id: 1, image: "", price: 23, unit: "kg", count: 0 },
      { name: "Jordgubbar", id: 2, image: "", price: 99, unit: "kg", count: 0 },
      { name: "Ananas", id: 3, image: "", price: 15, unit: "st", count: 0 },
      { name: "Blåbär", id: 4, image: "", price: 45, unit: "kg", count: 0 },
      { name: "Avokado", id: 5, image: "", price: 10, unit: "st", count: 0 },
      { name: "Äpple", id: 6, image: "", price: 24.9, unit: "kg", count: 0 },
      { name: "Vindruvor grön", id: 7, image: "", price: 30, unit: "kg", count: 0 },
      { name: "Päron", id: 8, image: "", price: 23, unit: "kg", count: 0 },
    ];

    wrapper = mount(ProductList, {
      propsData: { products },
      stubs: {
        "router-link": true,
        Header: true,
        AddDeleteButton: true,
      },
    });

    const expected = 8;
    const actual = wrapper.findAll(".fruit").length;
    expect(actual).toBe(expected);
  });

  it("should display no match message 'Sökresultat: 'applesin' Tyvärr hittade vi inga produkter som matchar din sökning 'applesin'' when search for 'applesin'", () => {
    let searchName = "applesin";
    let noMatch = true;

    let wrapper, products;
    products = [
      { name: "Banan", id: 1, image: "", price: 23, unit: "kg", count: 0 },
      { name: "Jordgubbar", id: 2, image: "", price: 99, unit: "kg", count: 0 },
      { name: "Ananas", id: 3, image: "", price: 15, unit: "st", count: 0 },
    ];
    wrapper = mount(ProductList, {
      propsData: { products, searchName, noMatch },
    });

    const noMatchMessage = wrapper.find(".searchResult");

    expect(noMatchMessage.exists()).toBe(true);
  });

  it("should only display 'Banan' product when search for 'Banan'", async () => {
    let searchName = "Banan";
    let wrapper, products;
    products = [
      { name: "Banan", id: 1, image: "", price: 23, unit: "kg", count: 0 },
      { name: "Jordgubbar", id: 2, image: "", price: 99, unit: "kg", count: 0 },
      { name: "Ananas", id: 3, image: "", price: 15, unit: "st", count: 0 },
    ];

    wrapper = mount(ProductList, {
      propsData: { products, searchName },
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
        AddDeleteButton: true,
        Description: true,
      },
    });

    const fruitComponent = wrapper.findComponent(Product);

    const fruitName = fruitComponent.find(".fruitName").text();

    expect(fruitName).toBe("Banan");
  });
});
