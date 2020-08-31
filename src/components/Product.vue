<template>
  <div class="fruit">
      <img v-bind:src = "product.image">
      {{product.name}}
      <div class="price">
      {{product.price}} /{{product.unit}}
      </div>
  </div>
</template>

<script>
export default {
    props:["product"]

}
</script>

<style lang="scss" scoped>
.fruit {
    margin: 20px;
    display: flex;
    flex-direction: column;
    border:2px solid black;
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