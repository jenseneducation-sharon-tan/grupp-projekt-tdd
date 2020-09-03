<template>
  <div class="home">
    <Header />
    <CartItem v-bind:cart="cart" />
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
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
  },
};
</script>
