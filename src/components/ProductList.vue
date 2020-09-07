<template>
  <div id="allFruits">
    <Product
      v-for="product in filteredFruit"
      :key="product.id"
      v-bind:product="product"
    />
    <div class="searchResult" v-if="noMatch">
      <h2>
        Sökresultat:
        <span>"{{ searchName }}"</span>
      </h2>
      <div class="message">
        Tyvärr hittade vi inga produkter som matchar din sökning "{{
          searchName
        }}"
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import { eventBus } from "../main.js";

export default {
  components: {
    Product
  },
  props: ["products"],
  data: function() {
    return {
      searchName: "",
      noMatch: false
    };
  },

  created() {
    eventBus.$on("fruitMatch", name => (this.searchName = name));
    eventBus.$on("noMatch", event => (this.noMatch = event));
  },
  computed: {
    filteredFruit() {
      return this.products.filter(product => {
        return product.name.match(new RegExp(this.searchName, "i")); // 'i' ignores case sensitive
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#allFruits {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 24px;
}

.message {
  font-family: "Caveat Brush", cursive;
  font-size: 40px;
}
</style>
