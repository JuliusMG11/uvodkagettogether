<template>
    <div class="grid grid-cols-2 gap-4">

      <section class="relative top-10">

        <article class="hero-text text-left z-10 relative pr-4">
          <h1 class="mb-8 mt-0">Objavujte zabavu <br />spolu s nami</h1>
          <p class="text-lg font-semibold">
            We bring you a new app that you can’t miss any entertainment with.
            Join the new world and let’s have a fun with Gettogether!
          </p>
        </article>

        <article class="flex mt-8">
          <div class="button-social w-max">
            <downloads-button
              title="Google play"
              text="Download on the"
              buttonLogo="google-play.svg"
              class="flex"
            />
          </div>

          <div class="button-social w-max ml-6">
            <downloads-button
              title="App store"
              text="Download on the"
              buttonLogo="app-store.svg"
              class="flex"
            />
          </div>
        </article>

           <article class="relax-section relative top-20 col-span-2 max-w-md">
            <figure class="relax-pin absolute top-8 z-0">
              <img src="@/assets/svg/category-pins/relax-pin.svg" alt="" />
            </figure>
            <figure class="relative z-1">
                  <img src="@/assets/svg/relax-section.svg" alt="" />
            </figure>
          </article>
      </section>

      <section class="relative">
        <figure class="presentation-pin absolute w-16">
        <img src="@/assets/svg/category-pins/presentation-pin.svg" alt="" />
      </figure>

      <figure class="science-pin absolute w-16">
        <img src="@/assets/svg/category-pins/science-pin.svg" alt="" />
      </figure>

      <figure class="culture-pin absolute w-16">
        <img src="@/assets/svg/category-pins/culture-pin.svg" alt="" />
      </figure>

      <figure class="forKids-pin absolute w-17">
        <img src="@/assets/svg/category-pins/forKids-pin.svg" alt="" />
      </figure>
      </section>

    </div>
</template>

<script>

import downloadsButton from '../UI/downloadsButton.vue'

export default {
  components: {
    downloadsButton,
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/_responsive.scss';

.presentation-pin {
  top: 0rem;
  left: 4rem;
  animation: 2s ease-in-out infinite presentation-animation;
}

.science-pin {
  top: -3rem;
  animation: 2s ease-in-out infinite science-animation;
  right: 17rem;
}

.culture-pin {
  top: 0rem;
  right: 7rem;
  animation: 2s ease-in-out infinite culture-animation;
}



  .forKids-pin {
    animation: 2s ease-in-out infinite forKids-animation;
    bottom: 3rem;
    left: -0.6rem;

    @include breakpoint (laptop) {
        bottom: -1rem;
        left: -0.5rem;
    }

    @media (min-width: 1700px) {
        bottom: -5rem;
        left: -0.2rem;
    }

    @include breakpoint(computer) {
        bottom: -3rem;
        left: 0rem;
    }

    @include breakpoint(bigScreen) {
        bottom: -7rem;
        left: 0rem;
    }
    
    @media (min-width: 2200px) {
        bottom: -11rem;
        left: .2rem;
    }

    @media (min-width: 2400px) {
        bottom: -14rem;
        left: .5rem;
    }

      @include breakpoint(bigerScreen) {
        bottom: -16rem;
      }
    }

 


  .hero-text {
      &::after {
        content: '';
        position: absolute;
        background: url('~@/assets/svg/cloud-hero-title.svg') 100% no-repeat;
        right: 210px;
        top: -50px;
        width: 160px;
        height: 50px;
      }
    }

  .relax-section {

    &::after {
      position: absolute;
      content: '';
      width: 640px;
      height: 110px;
      border-radius: 0%;
      bottom: 0px;
      left: -9px;
      z-index: -1;
      background: radial-gradient(
        circle,
        #feb426 22%,
        rgba(254, 180, 38, 0.552334) 47%,
        rgba(254, 180, 38, 0) 100%
      );
      filter: blur(39px);
    }

    .relax-pin {
      left: 30%;
      animation: 2s ease-in-out infinite relax-animation;
    }

  // RESPONSIVE

    @include breakpoint(computer) {
        max-width: 100%;
    }

    @include breakpoint(bigerScreen) {
        max-width: 120%;
    }


  }
</style>
