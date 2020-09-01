<template>
  <div>
      <section class="cartWrapper">
      <img id="cartIcon" src="../assets/cart.svg" alt="Bag/Cart" />
      <section class="lengthWrapper">
        <!--span>{{cart.length}}</span-->
      </section>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang ="scss" scoped>
.cartWrapper {
  z-index: 999;
  display: flex;
  background: rgb(83, 204, 83);
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover{
      -webkit-animation:wiggle 1.5s linear infinite;
  animation:wiggle 1.5s linear infinite;
  }
}

</style>