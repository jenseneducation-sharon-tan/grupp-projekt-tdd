<template>
  <div class="home">
    <Header />
    <ProductList v-bind:products="products" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    ProductList,
    Header,
    Footer,
  },
  computed: {
    products() {
      return this.$root.$data.products;
    },
  },
};
</script>
