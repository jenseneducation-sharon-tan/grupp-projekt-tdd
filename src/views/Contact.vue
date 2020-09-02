<template>
  <div id="contact">
    <Header />
    <div class="contact_main">
      <h2>Kontakt</h2>
      <p></p>
    </div>
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
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";
#contact {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact_main {
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
    width: 70%;
    margin-bottom: 5rem;
  }
}
</style>
