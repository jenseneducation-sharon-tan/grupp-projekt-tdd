<template>
  <div class="home">
    <Header v-bind:products="products" v-on:get-match="setMatch" v-on:no-match="setMessage" />

    <div class="catchphrase">
      <h2>Alltid 100% ekologiskt!</h2>
    </div>
    <div class="nav_main">
      <nav>
        <router-link
          class="nav"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{ routes.text }}</router-link>
      </nav>
      <ProductList
        v-bind:products="products"
        v-bind:searchName="searchName"
        v-bind:noMatch="noMatch"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    ProductList,
    Header,

    Footer,
  },
  computed: {
    products() {
      return this.$root.$data.products;
    },
  },
  methods: {
    setMatch(event) {
      this.searchName = event;
    },
    setMessage(event) {
      this.noMatch = event;
    },
  },

  data: () => ({
    links: [
      {
        id: 0,
        text: "Om oss",
        page: "/about",
      },
      {
        id: 1,
        text: "Kontakt",
        page: "/contact",
      },
    ],
    searchName: "",
    noMatch: false,
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.catchphrase {
  background-image: url("../assets/fruits_wide.png");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  h2 {
    color: $white;
    margin: auto 0;
    font-size: 5rem;
  }
}

.nav_main {
  display: flex;
}

nav {
  width: 20%;
  background: $yellow;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 2rem;

  a {
    margin: 1rem auto 0.5rem 20%;
    text-decoration: none;
    color: $dark-gray;
    font-size: 1.5rem;

    &:hover {
      color: $green;
    }
  }
}
</style>
