<template>
  <div class="fruit">
    <router-link v-bind:to="'/description/' + product.id">
      <img v-bind:src="product.image" />
      <div class=fruitName>
      {{ product.name }}
      </div>
      <div class="price">{{ product.price }} /{{ product.unit }}</div>
    </router-link>
    <AddDeleteButton v-bind:product="product" />
  </div>
</template>

<script>
import AddDeleteButton from "@/components/AddDeleteButton";

export default {
  components: {
    AddDeleteButton,
  },
  props: ["product"],
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.fruit {
  margin: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 10px 18px #888888;
  a{
    text-decoration: none;
  
  img {
    width: 160px;
    height: 180px;
  
 
  }
.price {
  text-align: right;
  border-top: 1px solid gray;
  font-size:20px;
  color:$pink;
  margin-right:5px;
}
.fruitName{
  color:$black;
  margin-bottom:5px;
}
}
}
</style>
