<template>
  <div class="home">
   <ProductList v-bind:products="products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import banana from "../assets/banana.svg";
import strawberry from '../assets/strawberry.svg'
import apple from '../assets/apple.svg'
import avocado from '../assets/avocado.svg'
import grapes from '../assets/grapes.svg'
import pear from '../assets/pear.svg'
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
              {name:"Banan",  id:1,image:banana, price: 23},
              {name:"Jordgubbar", id:2,image:strawberry, price:99}, 
             {name: "Ananas",  id:3, image:pineapple ,price:15} ,
              {name:"Blåbär",id:4, image:blueberry, price:45},
              {name:"Avokado", id:5, image:avocado,price:10},
              {name:"Äpple", id:6, image:apple,price:24.9},
              {name:"Vindruvor grön",id:7 ,image:grapes,price:30},
              {name:"Päron",id:8, image:pear,price:23}
              ]
        }
    }, 
  
}
</script>
