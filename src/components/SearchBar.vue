<template>
  <div class="search">
    <div v-if="isVisible" v-on:click="away()" class="not-focus"></div>
    <div class="userSearch">
      <input
        class="search-input"
        type="text"
        placeholder="Sök vara i e-handeln"
        v-model="userInput"
        @keyup="showList"
      />
      <button class="search-btn" @click="showMatch"></button>
    </div>
    <div class="dropDownList" v-show="isVisible & (filteredFruits.length > 0)">
      <ul class="fruitList" v-if="isVisible">
        <li v-for="product in filteredFruits" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data: function() {
    return {
      userInput: "",
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
      this.showMatch();
      if (this.userInput === "") {
        this.$emit("fruitMatch", this.userInput);
        return this.products;
      } else {
        this.isVisible = true;
        this.$emit("fruitMatch", this.userInput);
        return this.filteredFruits;
      }

      //this.userInput = "";
    },
    showMatch() {
      if (this.filteredFruits.length > 0) {
        this.isVisible = false;
        this.noMatch = false;
      } else {
        this.noMatch = true;
      }
      this.$emit("noMatch", this.noMatch);
    },
    away() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.search {
  display: none;
  margin: 0 40px 0 auto;

  button {
    min-width: 20px;
  }
}

.userSearch {
  display: flex;
  position: relative;
  width: 560px;
}

.search-input {
  height: 40px;
  padding: 10px;
  z-index: 2;
  border: none;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: 0;
  }
}

.search-btn {
  width: 40px;
  height: 40px;
  left: -20px;
  border-radius: 0 4px 4px 0;
  z-index: 999;

  &:hover::after {
    border-top: solid 2px $pink;
  }

  &:hover::before {
    box-shadow: 0 0 0 2px $pink;
  }
}

.search-btn::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  border-radius: 50%;
  box-shadow: 0 0 0 2px #fff;
}
.search-btn::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 6px;
  top: calc(50% + 6px);
  left: calc(50% + 2px);
  border-top: solid 2px #fff;
  transform: rotate(45deg);
}

.dropDownList {
  background-color: white;
  text-align: left;
  padding: 15px;
  width: 250px;
  position: absolute;
  top: 55px;
}

.fruitList {
  list-style: none;
}

.not-focus {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
}
</style>
