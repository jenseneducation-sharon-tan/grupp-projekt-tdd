<template>
  <div class="home">
   <ProductList v-bind:products="products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import banana from "../assets/banana1.jpg";
import strawberry from '../assets/strawberry.svg'
import apple from '../assets/apple.svg'
import avocado from '../assets/avocado.svg'
import grapes from '../assets/grapes.svg'
import pear from '../assets/pear.jpg'
import pineapple from '../assets/pineapple.svg'
import blueberry from '../assets/blueberry.svg'
export default {
  name: 'Home',
  components:{
    ProductList
  },
  data(){
        return{
           
            products:[
              {name:"Banan",  id:1,image:banana, price: 23, unit: "kg"},
              {name:"Jordgubbar", id:2,image:strawberry, price:99, unit: "kg"}, 
             {name: "Ananas",  id:3, image:pineapple ,price:15, unit: "st"} ,
              {name:"Blåbär",id:4, image:blueberry, price:45, unit: "kg"},
              {name:"Avokado", id:5, image:avocado,price:10, unit: "st"},
              {name:"Äpple", id:6, image:apple,price:24.9, unit: "kg"},
              {name:"Vindruvor grön",id:7 ,image:grapes,price:30, unit: "kg"},
              {name:"Päron",id:8, image:pear,price:23, unit: "kg"}
              ]
        }
    }, 
  
}
</script>
