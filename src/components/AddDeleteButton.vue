<template>
  <div>
  <img src ="@/assets/minus.svg" alt="minus" @click="down()" id="minus">
  <h6 class="count">{{product.count}} st</h6>
  <img src="@/assets/add.svg" alt="add" @click="increment()" id="add">
  </div>
</template>

<script>
export default {
 props:['product'],


 methods:{
     increment(){
         this.product.count++
     },
     down(){
         if(this.product.count>0){
             this.product.count--
         }
     }

 }
}
</script>

<style>

</style>