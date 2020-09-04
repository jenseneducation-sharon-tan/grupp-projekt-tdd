<template>
  <div class="fruit">
    <router-link v-bind:to="'/description/' + product.id">
      <img v-bind:src="product.image" />
      <div class="fruitName">{{ product.name }}</div>
      <div class="price">{{ product.price }} ,00 /{{ product.unit }}</div>
    </router-link>
    <AddDeleteButton v-bind:id="product.id" />
  </div>
</template>

<script>
import AddDeleteButton from "@/components/AddDeleteButton";

export default {
  components: {
    AddDeleteButton
  },
  props: ["product"]
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.fruit {
  background: $white;
  margin: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 8px #888888;
  width: 240px;

  // &:hover {
  //   transform: scale(1.05);
  // }

  a {
    text-decoration: none;

    img {
      width: 240px;
      height: 180px;
    }
    .price {
      text-align: right;
      border-top: 1px solid gray;
      font-size: 20px;
      color: $pink;
      font-size: 1.5rem;
      padding-top: 8px;
      padding-bottom: 12px;
      padding-right: 16px;
      font-weight: bold;
    }
    .fruitName {
      color: $black;
      margin: 8px auto 8px 16px;
      font-size: 1.2rem;
      text-align: left;
    }
  }
}
</style>
