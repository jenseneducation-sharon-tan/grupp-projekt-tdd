<template>
  <div class="delete">
    <img class="deleteIcon" src="@/assets/trashcan.svg" alt="delete" @click="removeProduct()" />
  </div>
</template>

<script>
export default {
  props: ["cart"],

  methods: {
    removeProduct(id) {
      let cart = this.cart;
      console.log(cart);
      let index = cart.findIndex((item) => item.id === id);
      console.log(index);
      cart.splice(index, 1);
    },
  },
};
</script>


<style lang="scss" scoped>
.delete {
  margin: 20px;
  display: flex;
  justify-content: flex-end;

  .deleteIcon {
    width: 20px;
    height: 20px;
  }
}
</style>
