<template>
  <div class="home">

    <div class="hero-building bg-home-hero bg-no-repeat relative z-10 mt-40 mb-44">

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

  @media (max-width: $bp-bigScreen) {
    padding-bottom: 8rem;
  }


  @include breakpoint(bigScreen) {
    padding-bottom: 12rem;
    margin-top: 10rem;
    margin-bottom: 6rem;
  }

  @include breakpoint(heroLarger) {
    padding-bottom: 18rem;
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


  @include breakpoint(laptop) {
    padding-bottom: 9rem;
  }

  @media (min-width: 1700px) {
    padding-bottom: 11rem;
  }

  @include breakpoint(computer) {
    padding-top: 11rem;
    padding-bottom: 13rem;
  }

   @include breakpoint(bigScreen) {
    padding-top: 13rem;
    padding-bottom: 15rem;
  }

  @media (min-width: 2400px) {
    padding-top: 20rem;
  }

  @include breakpoint(bigerScreen) {

  }

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

    @include breakpoint(laptop) {
      top: -24rem;
    }

    @include breakpoint(computer) {
      img {
        width: 110%;
      }
    }

    @include breakpoint(bigerScreen) {
        left: -20px;
    }

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

      @include breakpoint(computer) {
        bottom: 12%;
        left: 16%;
        width: 310px;
        height: 320px;
      }
    }

  }
}

.bg-land-two{
  background-size: 102%;


   // RESPONSIVE

  @include breakpoint(tablet) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1700px) {
    margin-top: 2rem;
    background-position: bottom;
  }

  @media (min-width: 1800px) {
    padding-top: 26rem;
    margin-top: 6rem;
  }

  @media (min-width: 1950px) {
    padding-top: 28rem;
  }

  @include breakpoint(bigScreen) {
    padding-top: 34rem;
    margin-top: 8rem;
  }

  @media (min-width: 2300px) {
    padding-top: 38rem;
  }

  @include breakpoint(bigerScreen) {
    padding-top: 48rem;
  }

}

.bg-land-three {
  background-size: 101%;
  padding-bottom: 120px;
  padding-top: 200px;
  top: 40px;

  // RESPONSIVE

  @include breakpoint(tablet) {
    margin-bottom: 60px;
  }

  @media (min-width: 1700px) {
    margin-top: 13rem;
  }


  @include breakpoint(bigScreen) {
      padding-top: 17rem;
  }

  @media (min-width: 2300px) {
    padding-top: 24rem;
  }

  @include breakpoint(bigerSCreen) {
    padding-top: 26rem;
  }
  

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

    @include breakpoint(tablet) {
      top: -10rem;
      width: 90%;
    }

    @media (min-width: 1700px) {
      top: -18rem;
      width: 100%;
    }

    @include breakpoint(bigScreen) {
      top: -24rem;
      left: -70px;

      img {
        width: 90%;
      }
    }
  }

}
</style>
