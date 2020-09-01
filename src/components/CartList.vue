<template>
  <div id="cartList">
    <section class="cartWrapper">
      <img id="cartIcon" src="../assets/cart.svg" alt="Bag/Cart" />
      <section class="lengthWrapper">
        <!--span>{{cart.length}}</span-->
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cartWrapper {
  z-index: 999;
  cursor: pointer;

  img {
    width: 100%;
    margin-top: 10px;
  }
  &:hover {
    -webkit-animation: wiggle 1.5s linear infinite;
    animation: wiggle 1.5s linear infinite;
  }
}
</style>
