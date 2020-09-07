<template>
  <div class="header">
    <span
      @click="$router.push('/')"
      v-if="$route.path != '/'"
      v-bind:class="{
        'display-none': $route.path == '/thank-you',
        back: true,
      }"
      >&#8810;&nbsp; Till butiken</span
    >

    <router-link
      to="/"
      class="logo-wrap"
      v-bind:class="{
        'logo-center': $route.path != '/',
      }"
    >
      <!-- <img class="logo" src="@/assets/logo.png" alt="logo" /> -->
      <span
        class="logo"
        v-bind:class="{
          'logo-text': $route.path == '/',
        }"
        >FruktHem.se</span
      >
    </router-link>
    <SearchBar
      v-bind:products="products"
      v-bind:class="{ display: $route.path == '/' }"
      v-on:fruitMatch="$emit('get-match', $event)"
      v-on:noMatch="$emit('no-match', $event)"
    />
    <CartList
      class="cart"
      v-bind:products="products"
      v-bind:class="{
        'display-none': $route.path == '/thank-you',
        'display-none2': $route.path == '/ShoppingBag',
      }"
    />
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
  computed: {
    products() {
      return this.$root.$data.products;
    },
  },
  // props: ["products"],
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

div.header {
  background: $green;
  height: 63px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  justify-content: space-between;

  .back {
    color: $dark-gray;
    font-size: 1rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    // .logo {
    //   width: 45px;
    //   height: 45px;
    // }

    .logo {
      color: $white;
      font-size: 40px;
      font-weight: bold;
      font-family: "Caveat Brush", cursive;
      z-index: 999;
    }

    .logo-text {
      margin-left: 8px;
    }
  }

  .logo-center {
    margin: 0 auto;
  }

  #cartList {
    margin: 0 0 0 auto;
  }

  .display-none,
  .display-none2 {
    display: none;
  }

  .display {
    display: flex;
  }
  .cart {
    z-index: 999;
  }
}
</style>
