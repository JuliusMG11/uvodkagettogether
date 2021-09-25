<template>
  <div class="billboard">
    <div class="billboard-content">
      <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
        <source src="@/assets/festival-video.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <article class="column-50">
          <section class="billboard-qrcode">
            <img src="@/assets/svg/qr-code.svg" alt="" />
          </section>

          <div class="billboard-first-section"></div>
        </article>

        <article class="column-50">
          <section class="billboard-mobile">
            <div class="billboard-title">
              <div class="logo-downloads">
                <div class="logo-play">
                  <img src="@/assets/svg/google-play.svg" alt="" />
                </div>

                <div class="logo-itunes">
                  <img src="@/assets/svg/app-store.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'billboardOneSection',
}
</script>

<style scoped lang="scss">
@import url('../../scss/_animation.scss');

.billboard {
  background: url('~@/assets/svg/billboard-one.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 420px;
  height: 470px;
  z-index: 20;
  position: relative;
  top: -230px;
  right: 40px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('~@/assets/svg/billboard-cloud.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 200px;
    height: 100px;
    top: -100px;
    right: 0px;
  }

  .billboard-content {
    width: 379px;
    height: 162px;
    background: url('~@/assets/people-festival.jpg');
    background-size: 100%;
    background-position: center;
    color: #121212;
    position: relative;
    top: 18px;
    left: 19px;
    border-radius: 2px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    overflow: hidden;

    &::before {
      content: 'STAHUJ NA';
      position: absolute;
      text-transform: uppercase;
      font-size: 42px;
      font-weight: 900;
      top: -5px;
      right: 0px;
      z-index: 7;
      color: white;
      opacity: 0.2;
      text-shadow: 0px 34px white, 0px 65px white, 0px 96px white,
        0px 126px white, 0px 156px white, 0px 186px white, 0px 216px white,
        0px 236px white, 0px 266px white, 0px 296px white, 0px 326px white;
      animation: 4s infinite text-animation;
    }

    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .billboard-mobile {
      display: flex;
      justify-content: end;
      position: relative;
      top: 90px;

      .billboard-title {
        z-index: 8;
        position: relative;

        .logo-downloads {
          display: flex;

          .logo-itunes {
            margin-left: 20px;
          }
        }
      }
    }

    &::after {
      background: linear-gradient(
        90deg,
        rgba(43, 218, 209, 1) 0%,
        rgba(43, 218, 209, 0.7484127440038515) 43%,
        rgba(43, 218, 209, 0.3422502790178571) 72%,
        rgba(255, 255, 255, 0) 100%
      );
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      left: 0px;
      top: 0px;
    }

    .billboard-first-section {
      display: flex;

      .billboard-title {
        display: flex;
      }
    }

    .billboard-qrcode {
      max-width: 120px;
      z-index: 8;
      position: relative;
    }
  }
}

/* RESPOO */
</style>
