<template>
  
   
        <div class="hero-building">       

            <div class="container">
                <section class="column-50">

                    <div class="hero-content">

                        <div class="hero-text">
                            <h1>Objavujte zabavu <br>spolu s nami </h1>
                            <p>Prinášame ti novú aplikáciu s ktorou už žiadnu 
                                zábavu nezmeškáš. Pridaj sa do nového sveta a 
                                bav sa spolu <br> s nami. Gettogether!</p>
                        </div>

                        <div class="downloads-buttons">
                            <div class="button-social">
                                <button class="btn-hover color-1" href="#">

                                    <div class="social-image">
                                        <img src="@/assets/svg/google-play.svg" alt="">
                                    </div>

                                    <div class="social-text">
                                        <p>Get it on</p>
                                        <h4>Google play</h4>
                                    </div>

                                </button>

                            </div>

                            <div class="button-social">
                                <button class="btn-hover color-1" href="#">

                                    <div class="social-image">
                                        <img src="@/assets/svg/app-store.svg" alt="">
                                    </div>

                                    <div class="social-text">
                                        <p>Download on the</p>
                                        <h4>App Store</h4>
                                    </div>

                                </button>
                            </div>
                            </div>

                    </div>

                    <div class="relax-section">

                        <div class="relax-pin">
                            <img src="@/assets/svg/category-pins/relax-pin.svg" alt="">
                        </div>

                        <img src="@/assets/svg/relax-section.svg" alt="">
                    </div>
                    
                </section>

                <section class="column-50">

                    <div class="presentation-pin">
                        <img src="@/assets/svg/category-pins/presentation-pin.svg" alt="">
                    </div>

                     <div class="science-pin">
                        <img src="@/assets/svg/category-pins/science-pin.svg" alt="">
                    </div>

                     <div class="culture-pin">
                        <img src="@/assets/svg/category-pins/culture-pin.svg" alt="">
                    </div>

                    <div class="forKids-pin">
                        <img src="@/assets/svg/category-pins/forKids-pin.svg" alt="">
                    </div>
                    
                  
                 <!--   <div class="two-building">
                        <img src="@/assets/svg/two-part-building.svg" >
                    </div>
                    <div class="hero-people">
                        <img src="@/assets/svg/hero-people.svg" >
                    </div> -->
                </section>
            </div>
        </div>
   
</template>


<style lang="scss" scoped>
    
    
 
    
    .hero-building {
        background: url('~@/assets/svg/first-part-building-test.svg');
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: right;
        background-position-y: 30px;
        width: 100%;
        height:100%;
        z-index: 10;
        position: relative;

        .presentation-pin,
        .science-pin,
        .culture-pin {
            position: absolute;

          img { 
               max-width: 70px;
           }
    
        }

        .presentation-pin {
            top: 20px;
            animation: 2s ease-in-out infinite presentation-animation;

            
            @keyframes presentation-animation {
                from {
                    transform: translateY(-40px) 
                                translateX(-40px)
                                rotate(-20deg);
                
                }

                70% {
                    transform: translateY(-45px) 
                                translateX(-45px)
                                rotate(-20deg);
                }

                to {
                    transform: translateY(-40px) 
                                translateX(-40px)
                                rotate(-20deg);
                }
            }
        }

        .science-pin {
            top: -5px;
            animation: 2s ease-in-out infinite science-animation;
            right: 27.8%;

             @keyframes science-animation {
                from {
                    transform: translateX(30px) 
                                translateY(0px)
                                rotate(-20deg);
                }

                70% {
                    transform: translateX(33px) 
                                translateY(10px)
                                rotate(-20deg);
                }

                to {
                    transform: translateX(30px) 
                                translateY(0px)
                                rotate(-20deg);
                }
            }
            
        }

        .culture-pin {
            top: 30px;
            right: 13%;
            animation: 2s ease-in-out infinite culture-animation;

            &::before {
                content: "";
                background-image: url('');
                background-size: 100%;
                background-repeat: no-repeat;
                
            }

            @keyframes culture-animation {
                from {
                    transform: translateX(0px) 
                                translateY(-10px)
                }

                70% {
                    transform: translateX(0px) 
                                translateY(-5px)
                }

                to {
                    transform: translateX(0px) 
                                translateY(-10px)
                }
            }
        }

        .forKids-pin {
            bottom: 20%;
            position: absolute;
            animation: 2s ease-in-out infinite forKids-animation;
            
            @keyframes forKids-animation {
                from {
                    transform: translateY(-5px)
                                translateX(-18px);
                }

                70% {
                    transform: translateY(0px)
                                translateX(-18px); 
                }
                
                to {
                    transform: translateY(-5px)
                                translateX(-18px); 
                }
            }


        }
        

        .container {

            padding-bottom: 100px;

            .column-50:first-child {
                padding-right: 50px;
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

                &::after {
                    content: "";
                    position: absolute;
                    background: url('~@/assets/svg/cloud-hero-title.svg') 100% no-repeat;
                    right: 210px;
                    top: -50px;
                    width: 160px;
                    height: 50px;
                }
                
                h1 {
                    font-size: 42px;
                    margin-bottom: 10px;
                    margin-top: 0px;
                }

                P {
                    font-size: 22px;
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
                

                
                button {
                    text-decoration: none;
                    display: flex;
                    background-color: black;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 30px 10px 30px;

                }

                .btn-hover {
                        background-size: 300% 100%;
                        cursor: pointer;
                         moz-transition: all .4s ease-in-out;
                        -o-transition: all .4s ease-in-out;
                        -webkit-transition: all .4s ease-in-out;
                        transition: all .4s ease-in-out;
                        border: none;
                    }

                     .btn-hover:hover {
                            background-position: 100% 0;
                            moz-transition: all .4s ease-in-out;
                            -o-transition: all .4s ease-in-out;
                            -webkit-transition: all .4s ease-in-out;
                            transition: all .4s ease-in-out;
                        }

                        .btn-hover:focus {
                            outline: none;
                        }

                        .btn-hover.color-1 {
                            background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
                            box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
                        }
                
                .social-text {

                    text-align: left;

                    h4 {
                        text-decoration: none;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        color: white;
                        font-size: 24px;
                        font-weight: 500;
                    }
                    
                    p {
                        margin-top: 0px;
                        margin-bottom: 0px;
                        color: white;
                    }
                   
                }

                .social-image {
                        padding-right: 20px;
                    img {
                        max-width: 50px;
                    }
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
                    content: "";
                    width: 640px;
                    height: 110px;
                    border-radius: 0%;
                    bottom: 0px;
                    left: -9px;
                    z-index: -1;
                    background: radial-gradient(circle, #feb426 22%, rgba(254, 180, 38, 0.552334) 47%, rgba(254, 180, 38, 0) 100%);
                    filter: blur(39px);
                }

                .relax-pin {
                    position: absolute;
                    left: 30%;
                    top: 10px;
                    z-index: -1;
                    animation: 2s ease-in-out infinite relax-animation;

                       @keyframes relax-animation {
                            from {
                                transform: translateY(-5px)
                                            translateX(-5px)
                                            rotate(-30deg);
                                        
                            }

                            70% {
                                transform: translateY(0px)
                                            translateX(0px)
                                            rotate(-30deg);
                            }
                            
                            to {
                                transform: translateY(-5px)
                                            translateX(-5px)
                                            rotate(-30deg);
                            }
                        }

                }
            }
        }
    }


@media (max-width: 1400px) {
    .hero-building .container .forKids-pin  {
        bottom: 20%;
    }

    .social-text {

        p {
            font-size: 16px !important;
        }
        h4 {
            font-size: 22px !important;
        }   
    }
}



</style>