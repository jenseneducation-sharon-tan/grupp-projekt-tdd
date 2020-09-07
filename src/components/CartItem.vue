<template>
  <div class="cart">
    <div class="cart-wrap">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="cart-item">
      <ul>
        <li v-for="product in cart" v-bind:key="product.id">
          <div class="cart-item-wrap">
            <div class="item-image">
              <img v-bind:src="product.image" />
            </div>
            <div class="item-title">{{ product.name }}</div>
            <div class="price">{{ product.price }}/{{ product.unit }}</div>
            <AddDeleteButton v-bind:id="product.id" />
            <div class="item-price">{{ product.price * product.count }}kr</div>
            <DeleteItem v-bind:id="product.id" v-on:send-id="getId" />
          </div>
        </li>
      </ul>
    </div>
    <hr />
    <h3 class="total-price">Att betala:{{ totalAmount }} kr</h3>
    <div class="button">
      <router-link to="/">
        <button class="continueShopping">Fortsätt Handla</button>
      </router-link>

      <button class="tillKassa" @click="youPaid" v-if="cart.length > 0">
        Till Kassan
      </button>
    </div>
  </div>
</template>

<script>
import AddDeleteButton from "@/components/AddDeleteButton";
import DeleteItem from "@/components/DeleteItem";

export default {
  components: { AddDeleteButton, DeleteItem },
  data() {
    return {
      title: "Varukorg",
      totalValue: 0,
      total: 0,
    };
  },
  props: ["cart"],
  methods: {
    getId(id) {
      let itemId = id;
      this.$emit("send-item", itemId);
    },
    youPaid() {
      this.$root.$data.cart = [];
      
      this.$root.$data.products.forEach((p) => (p.count = 0));
      this.$router.push("/thank-you");
    },
  },
  computed: {
    /*  totalPrice(product) {
      let total = this.total;
      console.log(total);
      total = product.price * product.count;
      console.log(total);
      return total;
    }, */

    totalAmount() {
      let cart = this.cart;
      let totalValue = this.totalValue;
      if (cart.length > 0) {
        totalValue = 0;
        cart.forEach((product) => {
          totalValue += product.price * product.count;
        });

        return totalValue;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.cart-wrap {
  margin: 20px;
}
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
  }
  ul {
    width: 85%;

    & li {
      list-style: none;
      margin-bottom: 20px;
    }
  }
}
.cart-item-wrap {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 50px 50px;
  text-align: left;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.total-price {
  text-align: right;
  font-size: 30px;
}
.tillKassa {
  margin-top: 20px;
  margin-left: 20px;
  width: 20px;
}
.continueShopping {
  margin-top: 20px;
  width: 20px;
}
</style>
