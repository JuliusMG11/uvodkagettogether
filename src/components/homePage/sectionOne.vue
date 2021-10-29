<template>
  <div class="md:container md:mx-auto grid grid-cols-2 gap-4 items-center">
    <article>
      <div class="bg-left-section relative -bottom-4 -right-16 z-4 bg-no-repeat flex justify-center">
        <figure class="concert-pin w-20 -top-20 absolute">
          <img src="@/assets/svg/category-pins/concert-pin.svg" alt="" />
        </figure>

        <figure class="party-pin w-20 absolute top-10 -left-2" id="party-pin">
          <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
        </figure>

        <figure class="concert-image relative z-20 max-w-lg top-4 ">
          <img src="@/assets/svg/home/concert-image.svg" alt="" />
        </figure>
      </div>

      <section class="title-servicing absolute z-10 -bottom-32 left-44 font-bold">
        <h2 class="">Naša služba</h2>
      </section>
    </article>

    <article>
      <section class="bg-right-section relative top-22 bg-no-repeat flex justify-end bg-right">
        <billboard-one-section />
      </section>
    </article>
  </div>
</template>

<script>
import billboardOneSection from '../UI/billboardOneSection.vue'

export default {
  components: {
    billboardOneSection,
  },
}
</script>

<style lang="scss" scoped>

#motionPath {
  overflow: visible;
  height: 100%;
  max-width: 100%;
  position: absolute;
}

#motionPath path {
  stroke-width: 2;
  stroke: gray;
}

#motionPath .astronaut {
  visibility: hidden;
}


.sports-pin {
  right: 10%;
  top: -60%;
  animation: 2s ease-in-out infinite sports-animation;
}

  .concert-pin {
    animation: 2s ease-in-out infinite concert-animation;
    right: 41%;
  }

  .party-pin {
    animation: 2s ease-in-out infinite party-animation;
  }

.title-servicing {
  transform: rotate(-18deg);

  @include breakpoint(laptop) {
        bottom: -120px;
  }

  @media (min-width: 1600px) {
    bottom: -240px;
  }

  @media (min-width: 2000px) {
    bottom: -260px;
  }

  @media (min-width: 2000px) {
    bottom: -24rem;
  }

  @media (min-width: 2350px) {
    bottom: -32rem;
  }

  h2 {
    font-size: 6.375rem; // 102px
    color: white;

    @media (min-width: 1600px) {
      font-size: 9rem;
      
      &::after {
        display: none;
      }
    }

    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/svg/servicing-title-bg.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      width: 640px;
      height: 230px;
      bottom: -90px;
      left: -2px;
      z-index: 12;
      transform: rotate(17deg);

        @media (min-width: 1600px) {
            left: 90px;
            bottom: -80px;
        }
    }

    
  }

}

// RESPONSIVE

@include breakpoint(laptop) {
  .concert-image {
    top: 3rem;
  }
}

@media (min-width: 1700px) {
  .concert-image {

      left: -2rem;

      img {
        max-width: 120%;
      }
  }
}

@media (min-width: 2400px) {
  .concert-image {
    top: 1rem;
    left: -8rem;

    img {
      max-width: 130%;
    }
  }
}

</style>
