<template>
  <div id="header">
    <router-link to="/">
      <!-- <img class="logo" src="@/assets/logo.png" alt="logo" /> -->
      <span
        class="logo-text"
        :class="{ 'center-logo': $route.path === '/thank-you' }"
        >FruktHem.se</span
      >
    </router-link>
    <SearchBar v-bind:products="products" />
    <CartList v-bind:products="products" />
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
  data: () => ({
    centerLogo: false,
  }),
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
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    .logo {
      width: 45px;
      height: 45px;
    }

    .center-logo {
      font-size: 100px;
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
