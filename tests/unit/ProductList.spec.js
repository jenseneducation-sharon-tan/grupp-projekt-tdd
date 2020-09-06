import { mount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";

describe("ProductList", () => {
  let wrapper, products;
  beforeEach(() => {
    products = [
      { name: "Banan", id: 1, image: "", price: 23, unit: "kg", count: 0 },
      { name: "Jordgubbar", id: 2, image: "", price: 99, unit: "kg", count: 0 },
      { name: "Ananas", id: 3, image: "", price: 15, unit: "st", count: 0 },
      { name: "Blåbär", id: 4, image: "", price: 45, unit: "kg", count: 0 },
      { name: "Avokado", id: 5, image: "", price: 10, unit: "st", count: 0 },
      { name: "Äpple", id: 6, image: "", price: 24.9, unit: "kg", count: 0 },
      {
        name: "Vindruvor grön",
        id: 7,
        image: "",
        price: 30,
        unit: "kg",
        count: 0,
      },
      { name: "Päron", id: 8, image: "", price: 23, unit: "kg", count: 0 },
    ];
    wrapper = mount(ProductList, { propsData: { products }, 
      stubs: {
        "router-link": true, 
        Header: true,
        AddDeleteButton: true
      },
    });

  });

  it("should have to show  8 products  when rendering", async () => {
    const expected = 8;
    const actual = wrapper.findAll(".fruit").length;
    expect(actual).toBe(expected);
  });
});
