<template>
  <div>
      <article class="column-50">
        <div class="hero-content">
          <section class="hero-text">
            <h1>Objavujte zabavu <br />spolu s nami</h1>
            <p>
              We bring you a new app that you can’t miss any entertainment with. 
              Join the new world and let’s have a fun with Gettogether!
            </p>
          </section>

          <section class="downloads-buttons">
            <div class="button-social">
              <downloads-button 
                title="Google play"
                text="Download on the" 
                buttonLogo="google-play.svg"
              />
            </div>

            <div class="button-social">
              <downloads-button 
                title="App store"
                text="Download on the" 
                buttonLogo="app-store.svg"
              />

            </div>
          </section>
        </div>

        <section class="relax-section">
          <figure class="relax-pin">
            <img src="@/assets/svg/category-pins/relax-pin.svg" alt="" />
          </figure>

          <img src="@/assets/svg/relax-section.svg" alt="" />
        </section>
      </article>

      <article class="column-50">
        <div class="presentation-pin">
          <img src="@/assets/svg/category-pins/presentation-pin.svg" alt="" />
        </div>

        <div class="science-pin">
          <img src="@/assets/svg/category-pins/science-pin.svg" alt="" />
        </div>

        <div class="culture-pin">
          <img src="@/assets/svg/category-pins/culture-pin.svg" alt="" />
        </div>

        <div class="forKids-pin">
          <img src="@/assets/svg/category-pins/forKids-pin.svg" alt="" />
        </div>

        <!--   <div class="two-building">
                        <img src="@/assets/svg/two-part-building.svg" >
                    </div>
                    <div class="hero-people">
                        <img src="@/assets/svg/hero-people.svg" >
                    </div> -->
      </article>
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

@import url('../../scss/_animation.scss');
@import url('../../scss/_variables.scss');
  

  .presentation-pin,
  .science-pin,
  .culture-pin {
    position: absolute;
    width: 70px;
    img {
      max-width: 100%;
    
    }
  }

  .presentation-pin {
    top: 20px;
    left: 50%;
    animation: 2s ease-in-out infinite presentation-animation;
  }

  .science-pin {
    top: -5px;
    animation: 2s ease-in-out infinite science-animation;
    right: 27.8%;
  }

  .culture-pin {
    top: 30px;
    right: 13%;
    animation: 2s ease-in-out infinite culture-animation;
  }

  .container {
    padding-bottom: 100px;

    .column-50 {
        &:first-child {
          padding-right: 50px;
        }
    }

    .forKids-pin {
    bottom: 34%;
    left: 50%;
    position: absolute;
    animation: 2s ease-in-out infinite forKids-animation;
  }

    .first-building {
      position: absolute;
      z-index: 4;
      right: 500px;
      top: 70px;
    }

    .two-building {
      position: relative;
      z-index: 4;
      left: 60px;
    }

    .hero-content {
      position: relative;
      top: 20px;

      .hero-text {
        text-align: left;
        z-index: 10;
        position: relative;
        top: 50px;
        padding-right: 40px;

        &::after {
          content: '';
          position: absolute;
          background: url('~@/assets/svg/cloud-hero-title.svg') 100% no-repeat;
          right: 210px;
          top: -50px;
          width: 160px;
          height: 50px;
        }

        h1 {
          margin-bottom: 10px;
          margin-top: 0px;
          font-weight: 1000;
        }

        P {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }

    .downloads-buttons {
      display: flex;
      margin-top: 80px;

      .button-social {
        width: max-content;

        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }

    .hero-people {
      position: relative;
      top: -150px;
      display: flex;
      justify-content: end;
      z-index: 10;

      img {
        max-width: 700px;
      }
    }

    .relax-section {
      // z-index: 10;
      position: relative;
      max-width: 500px;
      bottom: 0px;
      top: 100px;

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
        position: absolute;
        left: 30%;
        top: 10px;
        z-index: -1;
        animation: 2s ease-in-out infinite relax-animation;
      }
    }
  }
</style>
