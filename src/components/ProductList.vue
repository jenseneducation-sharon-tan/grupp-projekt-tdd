<template>
  <div id="allFruits">
  
      <Product v-for ="product in products" :key="product.id" v-bind:product="product"/>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
    components:{
        Product
    },
    props:['products']
    

}
</script>

<style>
#allFruits{
    display:flex;
    flex-wrap: wrap;
}

</style>