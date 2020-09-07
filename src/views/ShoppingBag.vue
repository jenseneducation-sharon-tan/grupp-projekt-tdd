<template>
  <div class="home">
    <Header />
    <CartItem v-bind:cart="cart" v-on:send-item="deleteItem" />

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
    Footer
  },
  methods: {
    deleteItem(id) {
      let item = this.cart.findIndex(item => item.id === id);
      this.cart.splice(item, 1);
      let product = this.products.find(p => p.id === id)
       product.count = 0
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    products(){
      return this.$root.$data.products;

    }
  }
};
</script>
