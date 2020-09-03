import { shallowMount, mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";

describe("SearchBar", () => {
  let wrapper, products;
  beforeEach(() => {
    products = [
      { name: "Banan", id: 1, image: "", price: 23, unit: "kg", count: 0 },
      { name: "Jordgubbar", id: 2, image: "", price: 99, unit: "kg", count: 0 },
      { name: "Ananas", id: 3, image: "", price: 15, unit: "st", count: 0 },
      { name: "Blåbär", id: 4, image: "", price: 45, unit: "kg", count: 0 },
    ];
    wrapper = shallowMount(SearchBar, { propsData: { products } });
  });

  it("should display 'Sök vara i e-handeln' in the search bar when renders", () => {
    const input = wrapper.find("input");
    let hasPlaceholder = input.attributes("placeholder");

    expect(hasPlaceholder).toBe("Sök vara i e-handeln");
  });

  it("should get list as props from parent ", async () => {
    const wrapper = mount(Header, {
      propsData: { products },
    });

    const input = wrapper.find("input");

    await input.trigger("click");

    const childComponent = wrapper.findComponent(SearchBar);
    const fruitList = childComponent.findAll("ul > li").wrappers;

    let elementCount = fruitList.length;

    expect(elementCount).toBe(products.length);
  });

  it("should display the list when click on search bar", async () => {
    const clickedInput = wrapper.find("input");

    await clickedInput.trigger("click");

    const listExist = wrapper.find(".fruitList").exists();

    expect(listExist).toBe(true);
  });

  it("should have 'B' to filter out 'Banan', 'Blåbär' and 'Jordgubbar", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");
    await input.setValue("B");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasBanana = results.some((li) => li.text() === "Banan");
    let hasBlueberry = results.some((li) => li.text() === "Blåbär");
    let hasStrawberry = results.some((li) => li.text() === "Jordgubbar");

    expect(hasBanana && hasBlueberry && hasStrawberry).toBe(true);
    expect(results.length).toBe(3);
  });

  it("should have 'b' to filter out 'Banan','Blåbär' and 'Jordgubbar", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");
    await input.setValue("b");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasBanana = results.some((li) => li.text() === "Banan");
    let hasBlueberry = results.some((li) => li.text() === "Blåbär");
    let hasStrawberry = results.some((li) => li.text() === "Jordgubbar");

    expect(hasBanana && hasBlueberry && hasStrawberry).toBe(true);
    expect(results.length).toBe(3);
  });

  it("should have 'NaN' to filter out 'Banan' and 'Ananas'", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");
    await input.setValue("NaN");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasBanana = results.some((li) => li.text() === "Banan");
    let hasPineapple = results.some((li) => li.text() === "Ananas");

    expect(hasBanana && hasPineapple).toBe(true);
    expect(results.length).toBe(2);
  });

  it("should display no match message 'Sökresultat: 'applesin' Tyvärr hittade vi inga produkter som matchar din sökning 'applesin'' when search for 'applesin'", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");

    const searchBtn = wrapper.find(".search-btn");

    await input.setValue("applesin");
    await searchBtn.trigger("click");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasOrange = results.some((li) => li.text() === "");

    const noMatchMessage = wrapper.find(".searchResult");

    expect(hasOrange).toBe(false);
    expect(noMatchMessage.exists()).toBe(true);
  });

  it("should NOT display error message when search for 'Banan'", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");

    const searchBtn = wrapper.find(".search-btn");

    await input.setValue("Banan");
    await searchBtn.trigger("click");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasBanana = results.some((li) => li.text() === "Banan");

    const noMatchMessage = wrapper.find(".searchResult");

    expect(hasBanana).toBe(true);
    expect(noMatchMessage.exists()).toBe(false);
  });

  it("should NOT display error message when search for 'ananas'", async () => {
    const input = wrapper.find("input");

    await input.trigger("click");

    const searchBtn = wrapper.find(".search-btn");

    await input.setValue("ananas");
    await searchBtn.trigger("click");

    let results = wrapper.findAll("ul > li").wrappers;

    let hasPineapple = results.some((li) => li.text() === "Ananas");

    const noMatchMessage = wrapper.find(".searchResult");

    expect(hasPineapple).toBe(true);
    expect(noMatchMessage.exists()).toBe(false);
  });
});
