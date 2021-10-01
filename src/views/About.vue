<template>
  <div class="about">
    <div class="md:container md:mx-auto px-4 flex justify-center items-center grid grid-cols-2 gap-4">
        <section class="text-left">
            <h2 class="mt-0 mb-0">Our team</h2>
            <p>
              We are a great group of people who came up with the idea that
              everyone has the right to have a fun and even more idea is to have
              fun in one place. Whether it’s a party event, sport event,
              theatres or just a tip for a trip. We want to provide people with
              all the possibilities of leisure activities or just made
              somebody´s day when looking for a treasure with a certain prize.
              Our point is for everyone to find what they enjoy.
            </p>
        </section>

        <section class="">
          <div class="hero-section relative flex justify-end">
            <div class="hero-image">
              <img src="@/assets/png/about/hero-image.png" alt="" />
            </div>
          </div>
        </section>
    </div>

    <div class="profile-section">
      <div class="cmd:container md:mx-auto grid grid-cols-3 gap-4">
        <section>
          <div class="team-content">
            <div class="profile-image relative z-5 ">
              <img src="@/assets/svg/about/roman-avatar.svg" alt="" />
            </div>
          </div>

          <h3>Roman</h3>
        </section>

        <section>
          <div class="team-content">
            <div class="profile-image relative z-5">
              <img src="@/assets/svg/about/simona-avatar.svg" alt="" />
            </div>
          </div>

          <h3>Simona</h3>
        </section>

        <section>
          <div class="team-content">
            <div class="profile-image relative z-5">
              <img src="@/assets/svg/about/julius-avatar.svg" alt="" />
            </div>
          </div>

          <h3>Julius</h3>
        </section>
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
@import url('../scss/_variables.scss');


.hero-section {
  padding-bottom: 100px;
  padding-top: 80px;

  .hero-image {
    max-width: 90%;
  }
}

.profile-section {
  background-image: url('~@/assets/png/about/team-land.png');
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 100px;

    .profile-image {
      max-width: 100%;
      width: 200px;
    }

    &:nth-child(1) {
      top: -70px;
    }

    &:nth-child(2) {
      left: 20px;
      top: -70px;

      .profile-image {
        width: 320px;
      }

      h3 {
        z-index: 5;
      }
    }

    &:nth-child(3) {
      top: -90px;
    }

    h3 {
      top: -70px;
      position: relative;
      font-size: 5.125rem; // 102px;
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 1000;
      color: white;
    }

    .team-content {
      display: flex;
      justify-content: center;
      position: relative;
      bottom: -20px;
    }
}
</style>
