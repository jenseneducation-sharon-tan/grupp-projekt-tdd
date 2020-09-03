<template>
  <div>
    <Header />
    <div id="backBtnDiv">
      <button id="backHome">Till hem</button>
    </div>
    <Product v-bind:product="product" />
    <div class="info-div">
      <p>This is a good eco {{ product.name }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Product,
    Header,
    Footer
  },
  computed: {
    product() {
      let id = this.$route.params.id;
      return this.$root.$data.products.find(product => product.id == id);
    }
  }
};
</script>

<style lang="scss" scoped>
.info-div {
  background: #fdffab;
  padding: 1rem;
}
#backBtnDiv {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  padding-left: 2rem;
}
</style>
