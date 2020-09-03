<template>
  <div class="delete">
    <img
      class="delete"
      src="@/assets/trashcan.svg"
      alt="delete"
      @click="removeFromCart()"
      v-bind:key="product.id"
    />
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeFromCart() {
      let cart = this.$root.$data.cart;
      let index = cart.findIndex((item) => item.id === this.product.id);
      cart.splice(index, 1);
    },
  },
};
</script>

<style></style>
