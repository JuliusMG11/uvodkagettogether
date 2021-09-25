<template>
  <div class="home">
    <div class="hero-building relative z-10">
      <div class="container mx-auto px-4">
        <section-hero />
      </div>
    </div>

    <div class="land relative bg-no-repeat bg-bottom pt-40">
      <section class="road absolute -top-52 z-10">
        <figure>
          <img src="@/assets/svg/road-part-1.svg" alt="" />
        </figure>
      </section>
      <section-one />
    </div>

    <div class="land2">
      <section-two />
    </div>

    <div class="land3">
      <div class="road2">
        <img src="@/assets/svg/road-part-2.svg" alt="" />
      </div>

      <section-three />
    </div>

    <footer>
      <section-footer />
    </footer>
  </div>
</template>

<script>

import sectionHero from '@/components/homePage/sectionHero.vue'
import sectionOne from '@/components/homePage/sectionOne.vue'
import sectionTwo from '@/components/homePage/sectionTwo.vue'
import sectionThree from '@/components/homePage/sectionThree.vue'
import sectionFooter from '@/components/homePage/sectionFooter.vue'

export default {
  name: 'Home',
  components: {
    sectionHero,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFooter,
  },
}
</script>

<style lang="scss" scoped>
.hero-building {
  background: url('~@/assets/svg/first-part-building-test.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: 30px;
  padding-bottom: 150px;
  margin-top: 100px;
}

.land {
  background-image: url('~@/assets/svg/land1.svg');
  background-size: 110%;
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    content: '';
    background: radial-gradient(
      circle,
      rgba(249, 217, 14, 0.8576564414828431) 27%,
      rgba(249, 217, 14, 0.5327264694940477) 52%,
      rgba(249, 217, 14, 0) 74%,
      rgba(249, 217, 14, 0) 84%
    );
    width: 200px;
    height: 200px;
    top: 20px;
    left: -50px;
    border-radius: 50%;
    filter: blur(10px);
  }

  .road {
    width: 106%;
    left: -60px;

    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/svg/home/cycling-man.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      bottom: 10%;
      left: 15%;
      width: 230px;
      height: 230px;
    }
  }
}

.land2 {
  position: relative;
  background-image: url('~@/assets/svg/land2.svg');
  background-size: 104%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: bottom;
  padding-bottom: 0px;
  padding-top: 300px;
  top: 180px;
  background-position-y: -80px;
}

.land3 {
  position: relative;
  background-image: url('~@/assets/svg/land3-new.svg');
  background-size: 101%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: bottom;
  padding-bottom: 120px;
  padding-top: 200px;
  top: 40px;

  &::before {
    position: absolute;
    content: '';
    background: radial-gradient(
      circle,
      rgba(249, 217, 14, 0.857656) 27%,
      rgba(249, 217, 14, 0.532726) 52%,
      rgba(249, 217, 14, 0) 74%,
      rgba(249, 217, 14, 0) 84%
    );
    width: 150px;
    height: 150px;
    top: 50px;
    right: -60px;
    border-radius: 50%;
    filter: blur(10px);
  }

  .road2 {
    position: absolute;
    object-fit: cover;
    width: 100%;
    left: 0px;
    top: -120px;
    z-index: 9;
    left: -20px;
  }
}
</style>
