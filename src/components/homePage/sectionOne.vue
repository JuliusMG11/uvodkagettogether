<template>
  <div class="md:container md:mx-auto grid grid-cols-2 gap-4">
    <article>
      <div class="bg-left-section relative top-32 -right-16 z-4 bg-no-repeat flex justify-center">
        <div class="concert-pin w-20 -top-52 absolute">
          <img src="@/assets/svg/category-pins/concert-pin.svg" alt="" />
        </div>

        <div class="party-pin w-20 absolute -top-16 left-20" id="party-pin">
          <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
        </div>

        <figure class="relative z-20 max-w-lg -top-28">
          <img src="@/assets/svg/concert.svg" alt="" />
        </figure>
      </div>

      <section class="title-servicing absolute z-10 -bottom-52 left-44 font-bold text-7xl">
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
@import url('../../scss/_animation.scss');
@import url('../../scss/_variables.scss');

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

.bg-left-section {
  background-image: url('~@/assets/svg/concert-bg.svg');
  background-size: 100%;

  .concert-pin {
    animation: 2s ease-in-out infinite concert-animation;
    right: 41%;
  }

  .party-pin {
    animation: 2s ease-in-out infinite party-animation;
  }
}

.bg-right-section {
  background-image: url('~@/assets/svg/billboard-bg.svg');
  background-size: 70%;
}

.title-servicing {
  transform: rotate(-18deg);

  h2 {
    font-size: 6.375rem; // 102px
    color: white;

    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/svg/servicing-title-bg.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      width: 640px;
      height: 230px;
      bottom: -100px;
      left: -2px;
      z-index: 12;
      transform: rotate(17deg);
    }
  }
}
</style>
