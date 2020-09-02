<template>
  <div id="header">
    <router-link to="/">
      <!-- <img class="logo" src="@/assets/logo.png" alt="logo" /> -->
      <span class="logo-text">FruktHem.se</span>
    </router-link>
    <SearchBar v-bind:products="products" />
    <CartList />
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

<style lang="scss" scoped>
@import "@/scss/main";

#header {
  background: $green;
  height: 63px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    .logo {
      width: 45px;
      height: 45px;
    }

    .logo-text {
      color: $white;
      margin-left: 8px;
      font-size: 40px;
      font-weight: bold;
      font-family: "Caveat Brush", cursive;
    }
  }

  #cartList {
    margin: 0 0 0 auto;
  }
}
</style>
