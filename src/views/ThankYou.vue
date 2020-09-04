<template>
  <div id="thank-you">
    <Header />
    <main>
      <p>
        Din beställning är på väg!
      </p>
      <p class="tack">
        Tack!
      </p>
      <hr />
      <router-link to="/" tag="button" id="button">Till butiken</router-link>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#thank-you {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;

    align-items: center;

    p {
      font-size: 24px;
    }

    .tack {
      font-family: "Caveat Brush", cursive;
      font-size: 80px;
    }

    hr {
      width: 70%;
      margin: 24px 0 40px;
    }
  }
}
</style>
