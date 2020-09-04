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
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddDeleteButton from "../components/AddDeleteButton";
export default {
  components: {
    AddDeleteButton,
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
@import "../scss/main.scss";

.wrapp-info {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    flex-direction: row;
    height: 400px;
    .info-P {
      margin-right: 100px;
      img {
        width: 400px;
        height: 400px;
      }
    }
    .wrappInfo {
      height: 100%;
      width: 200px;
      display: flex;
      flex-direction: column;

      .price1 {
        margin-top: 20px;
        font-size: 20px;
        color: $pink;
      }
      .name {
        font-size: 1.2rem;
      }

      .button1 {
        margin-top: 150px;
      }
    }
  }
}
.info-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: $yellow;
  padding: 1rem;
}
#backBtnDiv {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  padding-left: 2rem;
}
</style>
