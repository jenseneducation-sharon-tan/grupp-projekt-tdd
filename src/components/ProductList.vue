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
#allFruits {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
</style>
