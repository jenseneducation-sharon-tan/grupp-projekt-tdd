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
  props: ["products"],
  computed: {
    counter() {
      let total = 0;
      this.products.map((product) => (total += product.count));
      return total;
    },
  },
  /* computed: {
    counter() {
      let total = 0;
      this.$root.$data.cart.map((product) => (total += product.count));
      return total;
    }
  } */
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.bag {
  top: 20px;
  right: 20px;
}
.cartWrapper {
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;

  .cartIcon {
    width: 20px;
    height: 20px;
    margin: 20px auto auto 5px;
  }
}
.bag:hover {
  -webkit-animation: wiggle 1.5s linear infinite;
  animation: wiggle 1.5s linear infinite;
}
.counter {
  width: 20px;
  height: 20px;
  background-color: $pink;
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

//animation

/* @-webkit-keyframes wiggle {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }
  10% {
    -webkit-transform: rotateZ(-15deg);
    transform: rotateZ(-15deg);
  }
  20% {
    -webkit-transition: rotateZ(10deg);
    transition: rotateZ(10deg);
  }
  25% {
    -webkit-transition: rotateZ(-10deg);
    transition: rotateZ(-10deg);
  }
  30% {
    -webkit-transition: rotateZ(6deg);
    transition: rotateZ(6deg);
  }
  35% {
    -webkit-transform: rotateZ(-4deg);
    transform: rotateZ(-4deg);
  }
  40% {
    transform: rotateZ(7deg);
  }
  50% {
    transform: rotateZ(-6deg);
  }
  60% {
    transform: rotateZ(10deg);
  }
  70% {
    transform: rotateZ(-14deg);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-7deg);
  }
  100% {
    -webkit-transition: rotateZ(0);
    transition: rotateZ(0);
  }
} */
</style>
