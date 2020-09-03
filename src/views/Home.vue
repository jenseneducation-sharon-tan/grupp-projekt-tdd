<template>
  <div class="home">
    <Header />
    <div class="catchphrase">
      <h2>Alltid 100% ekologiskt</h2>
    </div>
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
    Footer
  },
  computed: {
    products() {
      console.log(this.$root.$data.products);
      return this.$root.$data.products;
    }
  }
};
</script>

<style lang="scss" scoped>
//@import "@/scss/main";

.catchphrase {
  background-image: url("../assets/fruits_wide.png");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  h2 {
    //color: $white;
    color: #ffffff;
    margin: auto 0;
    font-size: 4rem;
  }
}
</style>
