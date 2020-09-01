<template>
  <div id="footer">
    <h2>Contact Us</h2>
    <div class="contact">
      <div class="mail">
        <img src="@/assets/mail.svg" alt="" />
        <a href="mailto:mailus@fruktshop.com">mailus@fruktshop.com</a>
      </div>
      <div class="call">
        <img src="@/assets/call.svg" alt="" />
        <a>072xxxxxxx</a>
      </div>
    </div>
    <span>All right reserved @ FruktHem.se</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

#footer {
  background: $green;
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 24px;
  color: $white;

  .contact {
    margin-top: 8px;
    display: flex;

    div {
      display: flex;
      align-items: center;

      img {
        height: 24px;
        width: 24px;
      }
    }

    .mail {
      margin: 0 16px;

      a {
        color: $white;
      }

      img {
        margin: 0 8px;
      }
    }
  }

  span {
    font-size: 12px;
    margin-top: 16px;
  }
}
</style>
