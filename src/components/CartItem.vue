<template>
  <div class="cart">
    <!--  <Product v-for="product in cart" v-bind:key="product.id" /> -->

    <div class="cart-wrap">
      <h1 class="title">{{ title }}</h1>
      <ul>
        <li v-for="product in cart" v-bind:key="product.id">
          <div class="cart-item-wrap">
            <div class="item-image">
              <img v-bind:src="product.image" />
            </div>
            <div class="item-title">{{ product.name }}</div>
            <div class="price">{{ product.price }}/{{ product.unit }}</div>
            <AddDeleteButton v-bind:product="product" />
            <div class="item-price">{{ product.price * product.count }}kr</div>

            <button class="delete" @click="removeFromCart()" v-bind:key="product.id">Delete</button>
            <!--  <h3 class="total-price">Att betala:"{{ totalAmount }}" kr</h3> -->
            <!-- <DeleteItem v-bind:cart="cart" /> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddDeleteButton from "@/components/AddDeleteButton";
/* import DeleteItem from "@/components/DeleteItem"; */
/* import Product from "@/components/Product"; */
export default {
  components: { AddDeleteButton },
  data() {
    return {
      title: "Varukorg",
    };
  },
  props: ["cart"],
  methods: {
    removeFromCart() {
      let cart = this.$root.$data.cart;
      let index = this.cart.findIndex((item) => item.id === this.product.id);
      cart.splice(index, 1);
    },
  },
  /* computed: {
    totalPrice() {
      let cart = this.$root.$data.cart;
      let total = cart.price * cart.count;
      return total;
    },
  }, */

  /* totalAmount() {
    let totalValue = 0;
    let cart = this.$root.$data.cart;
    if (cart.length > 0) {
      cart.totalValue = 0;
      cart.forEach((item) => {
        cart.totalValue += item.price * item.quantity;
      });
      return cart.totalValue;
    } else {
      return 0;
    }
  }, */
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
