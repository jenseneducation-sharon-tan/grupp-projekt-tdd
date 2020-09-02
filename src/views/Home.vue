<template>
  <div class="home">
    <Header v-bind:products="products" />
    <ProductList v-bind:products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    ProductList,
    Header,
  },
  computed: {
    products() {
      return this.$root.$data.products;
    },
  },
};
</script>
