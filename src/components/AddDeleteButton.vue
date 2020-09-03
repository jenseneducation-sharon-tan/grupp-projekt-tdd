<template>
  <div id="click">
    <img src="@/assets/minus.svg" alt="minus" @click="down()" id="minus" />
    <p class="count">{{ product.count }} st<p>

    <img src="@/assets/add.svg" alt="add" @click="increment()" id="add" />
  </div>
  
</template>

<script>
export default {
  props: ["product"],

  methods: {
    increment() {
      /*  this.product.count++; */
      let cart = this.$root.$data.cart;

      if (cart.find((i) => i.id === this.product.id)) {
        let index = cart.findIndex((i) => i.id === this.product.id);
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
          count: this.product.count,
        };
        console.log("Item added");
        this.$root.$data.cart.push(addItem);
      }
    },
    down() {
      /*  if (this.product.count > 0) {
        this.product.count--;
      } */
      let cart = this.$root.$data.cart;
      let index = cart.findIndex((item) => item.id === this.product.id);
      cart[index].count--;
      this.product.count = cart[index].count;
      if (cart[index].count == 0) {
        cart.splice(index, 1);
        this.product.count = 0;
      }
    },
  },
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

<style></style>
