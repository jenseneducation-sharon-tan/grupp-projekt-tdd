<template>
  <div id="contact">
    <Header />
    <div class="contact_main">
      <h2>Kontakta oss</h2>
      <div class="contact">
        <div class="mail">
          <span>E-post:</span>
          <a href="mailto:mailus@fruktshop.com">mailus@fruktshop.com</a>
        </div>
        <div class="call">
          <span>Telefon:</span>
          <a>072xxxxxxx</a>
        </div>
      </div>
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
@import "../scss/main.scss";
#contact {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact_main {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .contact {
    margin-bottom: 5rem;
    margin-top: 8px;

    span {
      margin-right: 1rem;
    }

    span,
    a {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;

      img {
        height: 24px;
        width: 24px;
      }
    }
    .call {
      span {
        margin-right: 1rem;
      }
    }

    .mail {
      span {
        margin-right: 1.5rem;
      }
      a {
        color: $dark-gray;
      }
    }
  }
}
</style>
