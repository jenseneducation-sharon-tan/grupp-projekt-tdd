<template>
  <div id="click">
    <img src="@/assets/minus.svg" alt="minus" @click="down()" id="minus" />
    <p class="count">{{ product.count }} st</p>
    <img src="@/assets/add.svg" alt="add" @click="increment()" id="add" />
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    increment() {
      this.product.count++;
    },
    down() {
      if (this.product.count > 0) {
        this.product.count--;
      }
    },
  },
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
    transform: rotate(10deg);
  }
}

#add {
  &:hover {
    transform: rotate(10deg);
  }
}
</style>
