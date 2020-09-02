<template>
  <div class="home">
    <Header />
    <CartItem v-bind:product="product" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "ShoppingBag",
  components: {
    CartItem,
    Header,
    Footer,
  },

  /* methods: {
    cart() {
      /* if (this.$root.$data.products.find((product)=> product.id == this.$route.params.id)){ 
      let index = this.$root.$data.products.findIndex(
        (product) => product.id == this.$route.params.id
      );

      return this.$root.$data.products[index].count++;
    }, */

  computed: {
    product() {
      return this.$root.$data.products;
    },
    /*  product() {
      
      let index = this.$root.$data.products.findIndex(
        (product) => product.id == this.$route.params.id
      );
      return this.$root.$data.products[index].count++;
    }, 
  },
   
      product() {
        let id = this.$route.params.id;
        return this.$root.$data.products.find((product) => product.id == id);
      },*/
  },
};
</script>
