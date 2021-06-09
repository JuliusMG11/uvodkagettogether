<template>
  <div class="land4">
      <div class="container">
          <div class="column-50">
                <div class="billboard">
                        <div class="billboard-content">
                                <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
                                    <source src="@/assets/festival-video.mp4" type="video/mp4">
                                </video>
                            <div class="container">

                                <section class="column-70">
                                    
                                        <div class="billboard-qrcode">
                                            <img src="@/assets/svg/qr-code.svg" alt="">
                                        </div>

                                        <div class="billboard-first-section">
                                            <div class="billboard-title">
                        
                                                <h2>Stahuj na</h2> 

                                                <div class="logo-downloads">

                                                    <img src="@/assets/svg/logo-downloads.svg" alt="">
                                                </div>

                                            </div>
                                         </div>

                                </section>

                                <section class="column-30">
                                    <div class="billboard-mobile">
                
                                        <img src="" href="">

                                    </div>

                                </section>
                            </div>
                        </div>
                </div>
          </div>

          <div class="column-50">
              <div class="footer">

                  <div class="footer-content">
                       <h2>S nami už nič nezmeškáte!</h2>
                        <p>Podporte nás, aby sme pre Vás <br>mohli vyvýjať ďalšie funkcie</p>
                  </div>

                  <div class="buttons-group">
                      <button class="donate">Contact</button>
                      <button class="contact">Donate</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.land4 {
    position: relative;
    background-image: url('~@/assets/svg/land4-new.svg');
    background-size: 104%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: bottom;
    padding-top: 200px;
    z-index: 10;

     .billboard {
                background: url('~@/assets/svg/billboard-one.svg');
                background-size: 100%;
                background-repeat: no-repeat;
                width: 500px;
                height: 530px;
                z-index: 20;
                position: relative;
                top: 0px;
                transform: translateX(30px);

                .billboard-content {
                    width: 454px;
                    height: 196px;
                    background: url('~@/assets/people-festival.jpg');
                    background-size: 100%;
                    background-position: center;
                    color: #121212;
                    position: relative;
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
                        background: linear-gradient(90deg, rgba(43,218,209,1) 0%, rgba(43,218,209,0.7484127440038515) 43%, rgba(43,218,209,0.3422502790178571) 72%, rgba(255,255,255,0) 100%);
                        content: "";
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

        .footer-content {
            display: flex;
            justify-content: start;
            text-align: left;
            flex-direction: column;
            padding-top: 50px;

            h2 {
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 0px;
            }
            p {
                font-size: 22px;
                font-weight: 600;
                line-height: 30px;
            }
        }

        .buttons-group {
            display: flex;

            
        }
  
}


</style>