
<template>
  <div class="cart">
    <Product v-bind:product="product" />

    <!-- <div class="cart-wrap">
      <h1 class="title">{{ title}}</h1>
      <ul>
        <li v-for="product in product" v-bind:key="product.id">
          <div class="cart-item-wrap">
            <div class="item-image">
              <img v-bind:src="product.image" />
            </div>
            <div class="item-title">{{product.name}}</div>
            <div class="price">{{product.price}}/{{product.unit}}</div>
            <AddDeleteButton v-bind:product="product" />
            <div class="item-price">{{product.price * product.quantity}}kr</div>
            <div class="delete"></div>
          </div>
        </li>
      </ul>
    </div>-->
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  components: {
    Product,
  },
  data() {
    return {
      title: "Varukorg",
    };
  },
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.fruit {
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  img {
    width: 160px;
    height: 180px;
  }
}

.price {
  text-align: right;
  border-top: 1px solid gray;
}
</style>