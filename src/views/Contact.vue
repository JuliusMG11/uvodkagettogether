<template>
    <div class="contact-page">

        <div class="hero-image">
              
            <div class="container">
       
                <div class="column-50">
                    <div class="hero-text">
                        <h2>Nevahajte nas kontaktovat</h2>
                        <p>
                            Do you want to join the Dream Team and make a cooperation? Do you have 
                            any tips or ideas how to improve our app? Contact us. Every opinion 
                            counts and we will be happy for any feedback you 
                            can give us. Let’s make the world of entertainment together. 
                        </p>
                    </div>

                    
          <div class="downloads-buttons">
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
          </div>
                    
                </div>
                <div class="column-50">
                  <div class="telephone-both">
                         <img src="@/assets/svg/contact/telephone-both.svg" alt="">
                  </div>
                </div>
            

            </div>
        </div>

        <div class="contact-land">

            <div class="container">
                    
                <div class="column-50">

                </div>
                <div class="column-50">
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
                          <section class="column-100">
                            <div class="billboard-contact">
                                
                                <div class="buttons-group">

                                  <div class="contact-tel">
                                     <a href="tel:+420200200">+420 300 300</a>
                                  </div>

                                  <div class="contact-mail">
                                    <a href="mailto:info@gettogether.cz">info@gettogther.cz</a>
                                  </div>
                                  
                                  
                                </div>
                            </div>

                          </section>
                        </div>
                      </div>

                      <div class="contact-kid">
                        <img src="@/assets/svg/contact/contact-kid.svg" alt="">
                      </div>
                </div>
            </div>

        </div>
        </div>

        <footer-section />

    </div>
    
</template>

<script>
import footerSection from '../components/homePage/sectionFooter.vue';
import downloadsButton from '../components/UI/downloadsButton.vue'

    export default {
         components: {
            footerSection,
            downloadsButton
        },
    }
</script>

<style lang="scss" scoped>


.hero-image {
    background-image: url('~@/assets/svg/contact/hero-image-new.svg');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position-x: right;
    padding-bottom: 150px;
    padding-top: 150px;

    .container {
        display: flex;
        align-items: center;

        .downloads-buttons {
      display: flex;
      margin-top: 40px;

      .button-social {
        width: max-content;

        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }
        .hero-text {
          h2 {
                margin-bottom: 10px;
            }
        }

        .telephone-both {
          position: relative;
          width: 70px;
          height: 0px;
          bottom: -60px;
        }
    }
}



.contact-land {
    position: relative;
    background-image: url('~@/assets/svg/contact/contact-land.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    left: -8px;
    padding-top: 180px;
    margin-bottom: 80px;
    background-position: bottom;
    

    .contact-kid {
      position: relative;
      width: 160px;
      bottom: -60px;
    }

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
        content: "";
        position: absolute;
        background-image: url('~@/assets/svg/contact/contact-logo.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        top: 10px;
        right: 20px;
        height: 200px;
        width: 150px;
        z-index: 10;
        opacity: .9;
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
            margin-top: 10px
          }

          a {
            color: white;
            padding-top: 10px;
            font-weight: 900;
            text-decoration: none;
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

}

    

</style>