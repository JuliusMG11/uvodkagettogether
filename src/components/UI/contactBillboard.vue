<template>
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
              <div class="md:container md:mx-auto px-4 flex items-center grid grid-cols-2">
                <section>
                  <div class="billboard-contact">
                    <div class="buttons-group">
                      <div class="contact-tel">
                        <a href="tel:+420200200">+420 300 300</a>
                      </div>

                      <div class="contact-mail">
                        <a href="mailto:info@gettogether.cz"
                          >info@gettogther.cz</a
                        >
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <figure class="contact-kid">
              <img src="@/assets/svg/contact/contact-kid.svg" alt="" />
            </figure>
          </div>    
</template>

<style lang="scss" scoped>
     .billboard {
    background: url('~@/assets/svg/contact/contact-billboard.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 420px;
    height: 380px;
    z-index: 20;
    position: relative;
    top: -90px;
    transform: translateX(30px);

    .billboard-content {
      width: 396px;
      height: 169px;
      background: url('~@/assets/people-festival.jpg');
      background-size: 100%;
      background-position: center;
      color: #121212;
      position: relative;
      top: 11px;
      left: 12px;
      border-radius: 5px;
      padding-left: 20px;
      padding-top: 10px;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/contact/contact-logo.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        top: 10px;
        right: 20px;
        height: 200px;
        width: 150px;
        z-index: 10;
        opacity: 0.9;
        animation: 2s ease-in-out infinite zoom-logo;

        @keyframes zoom-logo {
          from {
            filter: blur(0px);
          }
          to {
            filter: bluer(15px);
          }
        }
      }

      h2 {
        margin-top: 0px;
        margin-bottom: 10px;
        font-weight: 900;
        color: white;
      }

      .billboard-contact {
        font-size: 32px;
        z-index: 10;
        position: relative;
        display: flex;
        text-align: left;
        flex-direction: column;
        margin-top: 40px;

        .buttons {
          margin-top: 10px;
        }

        a {
          color: white;
          padding-top: 10px;
          font-weight: 900;
          text-decoration: none;
          font-size: 2rem; // 32px
        }
      }

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

</style>