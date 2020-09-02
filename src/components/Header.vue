<template>
  <div>
    <CartList />
    <SearchBar v-bind:products="products" />
  </div>
</template>

<script>
import CartList from "@/components/CartList.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    CartList,
    SearchBar,
  },
  props: ["products"],
};
</script>

<style></style>
