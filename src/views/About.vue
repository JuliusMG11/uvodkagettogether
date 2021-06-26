<template>
  <div class="about">
    <div class="container">
      <div class="column-100">
        <div class="hero-section">
          <div class="hero-title">
            <h2>Our team</h2>
          </div>

          <div class="hero-image">
            <img src="@/assets/png/about/hero-bg-new.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <footer-section />
  </div>
</template>

<script>
import FooterSection from '../components/FooterSection.vue'

export default {
  components: {
    FooterSection,
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  padding-bottom: 100px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero-title {
    position: absolute;
    font-size: 72px;
    top: 50px;

    h2 {
      font-weight: 900;
      margin-top: 0px;
      margin-bottom: 10px;
      color: #121212;

      &::after {
        position: absolute;
        content: '';
        background-image: url('~@/assets/svg/about/hero-blue-pin.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 120px;
        height: 190px;
        right: 140px;
        top: 90px;
      }
    }
  }

  .hero-image {
    max-width: 70%;
  }
}
</style>
