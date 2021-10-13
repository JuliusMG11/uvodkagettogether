<template>
  <div class="md:container md:mx-auto grid grid-cols-2 gap-4 items-center">
    <article>
      <div class="bg-left-section relative -bottom-4 -right-16 z-4 bg-no-repeat flex justify-center">
        <div class="concert-pin w-20 -top-20 absolute">
          <img src="@/assets/svg/category-pins/concert-pin.svg" alt="" />
        </div>

        <div class="party-pin w-20 absolute top-10 -left-2" id="party-pin">
          <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
        </div>

        <figure class="relative z-20 max-w-lg top-4 ">
          <img src="@/assets/svg/home/concert-image.svg" alt="" />
        </figure>
      </div>

      <section class="title-servicing absolute z-10 -bottom-32 left-44 font-bold text-7xl">
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
