<template>
  <div id="about">
    <Header />
    <div class="about_main">
      <h2>Om oss</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem
        elit, consequat vitae vestibulum sed, hendrerit at odio. Sed nec ex et
        risus lobortis volutpat. Phasellus volutpat tristique tristique. Ut
        libero erat, viverra a hendrerit vitae, dictum tristique nulla. Donec a
        tortor eu diam lacinia tempor et eu ligula. Proin iaculis leo eget dolor
        pellentesque, vel dapibus leo tempor. Nunc ac velit quis felis euismod
        interdum. Duis molestie justo ut est malesuada porttitor. Sed massa
        lorem, pharetra id nisl quis, vehicula laoreet arcu. Curabitur est
        lectus, convallis nec arcu nec, pulvinar vestibulum quam. Nullam
        fermentum eros id orci tempor, porttitor consequat mauris fringilla.
        Proin eu eros eros. Sed consectetur sem sit amet dignissim semper.
        Suspendisse ac vehicula enim. Aliquam erat volutpat. Vestibulum vitae
        quam eget nibh pharetra fermentum.
      </p>
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
@import "@/scss/main.scss";
#about {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about_main {
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
