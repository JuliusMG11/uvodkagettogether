<template>
    <div class="container">
      <article class="column-70">

        <div class="bg-left-section">
            <div class="concert-pin">
              <img src="@/assets/svg/category-pins/concert-pin.svg" alt="" />
            </div>


            <div class="party-pin" id="party-pin" >
              <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
            </div>


          <img src="@/assets/svg/concert.svg" alt="" />
        </div>

        <section class="title-servicing">
          <h2>Naša služba</h2>
        </section>
      </article>

      <article class="column-30">
        <section class="bg-right-section">

          <billboard-one-section />

       
        </section>
          </article>
    </div>
        
</template>

<script>
    import billboardOneSection from '../UI/billboardOneSection.vue'

export default {

  components: {
    billboardOneSection
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
    position: absolute;
    right: 10%;
    top: -60%;
    animation: 2s ease-in-out infinite sports-animation;
  }

  .bike {
    position: absolute;
    width: 200px;
    top: -30%;
    z-index: 12;
    right: 20px;
    transform: rotate(180deg);
  }

  .bg-left-section {
    position: relative;
    top: 10px;
    left: -50px;
    background-image: url('~@/assets/svg/concert-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    z-index: 4;
    text-align: center;
    img {
      width: 60%;
      left: -0px;
      position: relative;
      bottom: 50px;
      z-index: 20;
    }

      .concert-pin {
        position: absolute;
        animation: 2s ease-in-out infinite concert-animation;
        width: 150px;
      }

      .party-pin {
        position: absolute;
        width: 150px;
        animation: 2s ease-in-out infinite party-animation;
     }
  }

  .bg-right-section {
    position: relative;
    top: 10px;
    background-image: url('~@/assets/svg/billboard-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 350px;
    right: 30px;

  }

  .title-servicing {
    position: absolute;
    text-align: left;
    left: 210px;
    z-index: 10;
    transform: rotate(-18deg);
    bottom: -280px;
    color: white;

    h2 {
          font-size:6.375rem; // 102px
          font-weight: 900;

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/servicing-title-bg.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 640px;
        height: 230px;
        bottom: -10px;
        left: -2px;
        z-index: 12;
        transform: rotate(17deg);
      }
    }
  }
</style>
