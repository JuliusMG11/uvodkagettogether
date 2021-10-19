<template>
  <div class="home">

    <div class="hero-building bg-home-hero bg-no-repeat relative z-10 mt-28 mb-44">

      <div class="md:container md:mx-auto mx-auto px-4">
        <section-hero />
    </div>
    </div>

    <div class="bg-land-one relative bg-no-repeat bg-center pt-16 pb-24">
      <section class="road absolute z-10">
        <figure>
          <img src="@/assets/svg/road-part-1.svg" alt="" />
        </figure>
      </section>
      <section-one />
    </div>

    <div class="bg-land-two relative bg-no-repeat bg-center top-44 pt-96">
      <section-two />
    </div>

    <div class="bg-land-three relative bg-no-repeat bg-bottom  ">
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
@import '../scss/_variables.scss';
@import '../scss/_responsive.scss';

.hero-building  {
 background-size: 60%;
 background-position-x: 100%;

 // RESPO


  @media (max-width: $bp-laptop) {
    padding-bottom: 5rem
  }

  @media (max-width: 1750px) {
    padding-bottom: 8rem;
    margin-bottom: 8rem;
  }


  @include breakpoint(bigScreen) {
    padding-bottom: 12rem;
    margin-top: 10rem;
  }

  @include breakpoint(heroLarger) {
    padding-bottom: 16rem;
  }

  @include breakpoint(bigerScreen) {
    padding-bottom: 20rem;
  }

}

/*.bg-home-hero-bg {
  background-size: 60%;
}*/

.bg-land-one {
  background-size: 100%;


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
    width: 150px;
    height: 150px;
    top: 170px;
    left: -50px;
    border-radius: 50%;
    filter: blur(10px);
  }

  .road {
    width: 106%;
    left: -60px;
    top: -20rem;

    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/svg/home/cycling-man.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      bottom: 10%;
      left: 16%;
      width: 230px;
      height: 250px;
    }

    // RESPO

      @include breakpoint(laptop) {
        top: -22rem;
        padding-top: 6rem;
      }
  }
}

.bg-land-two{
  background-size: 102%;
}

.bg-land-three {
  background-size: 101%;
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
