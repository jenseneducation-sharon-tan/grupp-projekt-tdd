<template>
  <div class="search">
    <div class="userSearch">
      <input
        class="search-input"
        type="text"
        placeholder="Sök vara i e-handeln"
        v-model="userInput"
        @click="showList"
      />
      <button class="search-btn" @click="showMatch">Sök</button>
    </div>
    <div class="dropDownList">
      <ul class="fruitList" v-if="isVisible">
        <li v-for="product in filteredFruits" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
    <div class="searchResult" v-if="noMatch">
      <h4>
        Sökresultat:
        <span>"{{ userInput }}"</span>
      </h4>
      <div class="message">
        Tyvärr hittade vi inga produkter som matchar din sökning "{{
        userInput
        }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data: function () {
    return {
      userInput: "",
      isActive: false,
      isVisible: false,
      noMatch: false,
    };
  },
  computed: {
    filteredFruits() {
      return this.products.filter((product) => {
        return product.name.match(new RegExp(this.userInput, "i")); // 'i' ignores case sensitive
      });
    },
  },
  methods: {
    showList() {
      this.noMatch = false;
      this.isVisible = true;
      this.userInput = "";
    },
    showMatch() {
      let productArr = this.products.map((product) => {
        return product.name;
      });

      let capInput =
        this.userInput.charAt(0).toUpperCase() + this.userInput.substr(1);

      if (productArr.includes(capInput)) {
        //this.isVisible = false;  --> to show only banan pic (need to work on this)
        this.noMatch = false;
      } else {
        this.noMatch = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.userSearch {
  display: inline-block;
  margin-left: 170px;
}

.search-input {
  margin-top: 200px;
  height: 40px;
  width: 250px;
  padding: 10px;
}

.search-btn {
  height: 40px;
  width: 20%;
  margin-top: 20px;
}

.dropDownList {
  background-color: white;
  text-align: left;
  padding: 15px;
  width: 250px;
  margin-left: 170px;
}

.fruitList {
  list-style: none;
}
</style>
