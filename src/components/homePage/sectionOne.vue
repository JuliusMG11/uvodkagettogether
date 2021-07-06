<template>
  <div class="land">
    <div class="sports-pin">
      <img src="@/assets/svg/category-pins/sport-pin.svg" alt="" />
    </div>

    <div class="road">
      <img src="@/assets/svg/road-part-1-test.svg" alt="" />
    </div>

    <div class="container">
      <section class="column-70">
        <div class="concert-pin">
          <img src="@/assets/svg/category-pins/concert-pin.svg" alt="" />
        </div>

        <div class="party-pin">
          <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
        </div>

        <div class="bg-left-section">
          <img src="@/assets/svg/concert.svg" alt="" />
        </div>

        <div class="title-servicing">
          <h2>Naša služba</h2>
        </div>
      </section>

      <section class="column-30">
        <div class="bg-right-section">
          <div class="billboard">
            <div class="billboard-content">
              <video
                playsinline
                autoplay
                muted
                loop
                poster="polina.jpg"
                id="bgvid"
              >
                <source src="@/assets/festival-video.mp4" type="video/mp4" />
              </video>
              <div class="container">
                <section class="column-50">
                  <div class="billboard-qrcode">
                    <img src="@/assets/svg/qr-code.svg" alt="" />
                  </div>

                  <div class="billboard-first-section"></div>
                </section>

                <section class="column-50">
                  <div class="billboard-mobile">
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
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.land {
  position: relative;
  background-image: url('~@/assets/svg/land1.svg');
  background-size: 110%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: bottom;
  padding-bottom: 0px;
  padding-top: 180px;

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
    top: 0px;
    left: -60px;
    border-radius: 50%;
    filter: blur(10px);
  }

  .sports-pin {
    position: absolute;
    right: 10%;
    top: -60%;
    animation: 2s ease-in-out infinite sports-animation;

    //    img {
    //      max-width: 70px;
    //   }

    @keyframes sports-animation {
      from {
        transform: translateX(-5px) translateY(-5px) rotate(-40deg);
      }

      70% {
        transform: translateX(0px) translateY(0px) rotate(-40deg);
      }

      to {
        transform: translateX(-5px) translateY(-5px) rotate(-40deg);
      }
    }
  }

  .road {
    position: absolute;
    width: 102%;
    left: 0px;
    top: -400px;
    z-index: 9;
    left: -20px;

    &::after {
      content: '';
      position: absolute;
      background-image: url('~@/assets/svg/cycling-man.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      bottom: 10%;
      left: 15%;
      width: 230px;
      height: 230px;
    }
  }

  .concert-pin {
    position: absolute;
    top: 24%;
    left: 28.9%;
    animation: 2s ease-in-out infinite concert-animation;

    @keyframes concert-animation {
      from {
        transform: translateY(-5px);
      }

      70% {
        transform: translateY(0px);
      }

      to {
        transform: translateY(-5px);
      }
    }
  }

  .party-pin {
    position: absolute;
    left: 10.6%;
    top: 31%;
    animation: 2s ease-in-out infinite party-animation;

    @keyframes party-animation {
      from {
        transform: translateY(-5px) translateX(-5px) rotate(-30deg);
      }

      70% {
        transform: translateY(0px) translateX(0px) rotate(-30deg);
      }

      to {
        transform: translateY(-5px) translateX(-5px) rotate(-30deg);
      }
    }
  }

  .bg-left-section {
    position: relative;
    top: 0px;
    background-image: url('~@/assets/svg/concert-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 480px;
    z-index: 4;
    text-align: center;
    left: -80px;
    top: -110px;

    img {
      width: 50%;
      left: -0px;
      position: relative;
      top: 180px;
      z-index: 20;
    }
  }

  .bg-right-section {
    position: relative;
    top: 60px;
    background-image: url('~@/assets/svg/billboard-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 350px;
    right: 0px;

    .billboard {
      background: url('~@/assets/svg/billboard-one.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 420px;
      height: 470px;
      z-index: 20;
      position: relative;
      top: -70px;
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

          @keyframes text-animation {
            from {
              transform: translateY(-180px);
            }

            to {
              transform: translateY(0px);
            }
          }
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
  }

  .title-servicing {
    position: absolute;
    text-align: left;
    font-size: 72px;
    left: 210px;
    z-index: 10;
    transform: rotate(-18deg);
    bottom: -280px;
    color: white;

    h2 {
      font-weight: 900;

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/servicing-title-bg.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 640px;
        height: 230px;
        bottom: 0px;
        left: -2px;
        z-index: 12;
        transform: rotate(17deg);
      }
    }
  }
}
</style>
