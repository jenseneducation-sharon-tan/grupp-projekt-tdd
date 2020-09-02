<template>
  <div id="allFruits">
    <Product
      v-for="product in products"
      :key="product.id"
      v-bind:product="product"
    />
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  components: {
    Product,
  },
  props: ["products"],
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
</style>
