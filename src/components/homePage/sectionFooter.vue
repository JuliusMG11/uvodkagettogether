<template>
  <div class="bg-footer relative bg-no-repeat bg-bottom z-10 pt-56">
    <div class="md:container md:mx-auto grid grid-cols-2 gap-4">
      <section>
        <div class="billboard bg-billboard-bg bg-repeat-no z-20 relative">
          <div class="billboard-content relative">
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
            <div class="grid grid-cols-2 gap-4">
              <section class="span-2">
                <div class="billboard-qrcode">
                  <img src="@/assets/svg/qr-code.svg" alt="" />
                </div>

                <div class="relative flex flex-col z-20">
              
                    <h2 class="text-2xl">Stahuj na</h2>

                    <div class="logo-downloads">
                      <img src="@/assets/svg/logo-downloads.svg" alt="" />
                    </div>
          
                </div>
              </section>

              <section class="column-30">
                <div>
                  <img src="" href="" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="footer">
          <article class="footer-content flex justify-start text-left flex-col ">
            <h2 class="primary">S nami už nič nezmeškáte!</h2>
            <!--  <p>
              You can support us so we can develop other interesting functions 
              <br>for you, which you will be able to use just 
              with “one click” and make planning easier for you.
            </p> -->
          </article>

          <div class="flex">
            <default-button title="Contact" class="first-button">
            </default-button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import defaultButton from '../UI/defaultButton.vue'

export default {
  name: 'FooterSection',
  components: {
    defaultButton,
  },
}
</script>

<style lang="scss" scoped>
.bg-footer {
  background-size: 104%;

  .billboard {
    background-size: 100%;
    width: 500px;
    height: 530px;
    transform: translateX(30px);

    .billboard-content {
      width: 454px;
      height: 196px;
      color: #121212;
      top: 18px;
      left: 19px;
      border-radius: 5px;
      padding-left: 40px;
      padding-top: 20px;

      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
      }

      .billboard-title {
        z-index: 8;
        position: relative;
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
      

      .billboard-qrcode {
        max-width: 120px;
        z-index: 8;
        position: relative;
      }
    }
  }
}
</style>
