<template>
  <div class="bag">
    <router-link to="/ShoppingBag">
      <div class="counter">
        <!-- <p class="counter__num">{{ counter }}</p> -->
      </div>
      <div class="cartWrapper">
        <img class="cartIcon" src="@/assets/shopping-cart.svg" alt="Bag/Cart" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  /*computed: {
    counter() {
      let total = 0;
      this.$root.$data.products.map(product => (total += product.count));
      return total;
    }
  }*/
};
</script>

<style lang="scss" scoped>
.bag {
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;
}
.cartWrapper {
  background-color: rgb(83, 204, 83);
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;

  .cartIcon {
    width: 20px;
    height: 20px;
    margin: 20px auto auto 5px;
  }
  &:hover {
    -webkit-animation: wiggle 1.5s linear infinite;
    animation: wiggle 1.5s linear infinite;
  }
}
.counter {
  width: 20px;
  height: 20px;
  background-color: #ff9be9;
  border-radius: 50%;
  position: absolute;
  margin-top: 2px;
  margin-left: 15px;

  &__num {
    color: white;
    margin-top: 1px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
