<template>
  <div id="clickB">
    <img src="@/assets/minus.svg" alt="minus" @click="down()" id="minus" />
    <h6 class="count">{{ this.product.count }} st</h6>

    <img src="@/assets/add.svg" alt="add" @click="increment()" id="add" />
  </div>
</template>

<script>
export default {
  props: ["id"],

  methods: {
    increment() {
      let cart = this.$root.$data.cart;

      if (cart.find((i) => i.id === this.product.id)) {
        let index = cart.findIndex((i) => i.id === this.product.id);
        cart[index].count++;
        this.product.count = cart[index].count;
      } else {
        this.product.count = 1;
        const addItem = {
          name: this.product.name,
          id: this.product.id,
          image: this.product.image,
          price: this.product.price,
          unit: this.product.unit,
          count: this.product.count,
        };

        this.$root.$data.cart.push(addItem);
      }
    },
    down() {
      let cart = this.$root.$data.cart;

      let index = cart.findIndex((item) => item.id === this.product.id);
      if (index === -1) return;

      if (this.product.count > 0) {
        cart[index].count--;
        this.product.count = cart[index].count;
      }
      if (this.product.count == 0) {
        cart[index].count == 0;
        cart.splice(index, 1);
      }
    },
  },
  computed: {
    product() {
      let products = this.$root.$data.products;
      let product = products.find((item) => item.id === this.id);
      return product;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#clickB {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  padding-bottom: 8px;

  img {
    cursor: pointer;
  }

  p {
    font-size: 1.2rem;
  }
}

#minus {
  &:hover {
    transform: rotate(10deg);
  }
}

#add {
  &:hover {
    transform: rotate(10deg);
  }
}
</style>
