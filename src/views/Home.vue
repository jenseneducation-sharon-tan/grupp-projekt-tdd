<template>
  <div class="home">
    <Header />
    <div class="catchphrase">
      <h2>Alltid 100% ekologiskt!</h2>
    </div>
    <div class="nav_main">
      <nav></nav>
      <ProductList v-bind:products="products" />
    </div>
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

<style lang="scss" scoped>
@import "@/scss/main";

.catchphrase {
  background-image: url("../assets/fruits_wide.png");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  h2 {
    color: $white;
    margin: auto 0;
    font-size: 5rem;
  }
}

.nav_main {
  display: flex;
}

nav {
  width: 20%;
  background: $yellow;
}
</style>
