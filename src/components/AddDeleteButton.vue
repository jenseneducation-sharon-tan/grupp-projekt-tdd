<template>
  <div>
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
      /*  this.product.count++; */
      let cart = this.$root.$data.cart;

      if (cart.find(i => i.id === this.product.id)) {
        let index = cart.findIndex(i => i.id === this.product.id);
        cart[index].count++;
        this.product.count = cart[index].count;
        console.log("added another item");
      } else {
        this.product.count = 1;
        const addItem = {
          name: this.product.name,
          id: this.product.id,
          image: this.product.image,
          price: this.product.price,
          unit: this.product.unit,
          count: this.product.count
        };
        console.log("Item added");
        this.$root.$data.cart.push(addItem);
      }
    },
    down() {
      let cart = this.$root.$data.cart;
      let index = cart.findIndex(item => item.id === this.product.id);
      if (this.product.count > 0) {
        cart[index].count--;
        this.product.count = cart[index].count;
      }
      if (this.product.count == 0) {
        cart[index].count == 0;
        cart.splice(index, 1);
      }
    }
  },
  computed: {
    product() {
      let products = this.$root.$data.products;
      let product = products.find(item => item.id === this.id);
      return product;
    }
  }
  /* computed: {
    productCount: function() {
      let cart = this.$root.$data.cart;
      let item = cart.find((i) => i.id === this.product.id);

      this.product.count = item.count;
      return this.product.count;
    }, 
  },*/
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#click {
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
    transform: scale(0.8);
  }
}

#add {
  &:hover {
    transform: scale(1.3);
  }
}
</style>
