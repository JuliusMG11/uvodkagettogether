<template>
  
   
        <div class="hero-building">       

            <div class="container">
                <section class="column-50">

                    <div class="hero-text">
                        <h1>Objavujte zabavu <br>spolu s nami </h1>
                        <p>Prinášame ti novú aplikáciu s ktorou už žiadnu 
                            zábavu nezmeškáš. Pridaj sa do nového sveta a 
                            bav sa spolu s nami. Gettogether!</p>
                    </div>

                    <div class="downloads-buttons">
                        <div class="button-google">
                            <a href="">

                                <div class="google-image">
                                    <img src="@/assets/svg/google-play.svg" alt="">
                                </div>

                                <div class="google-text">
                                    <p>get it on</p>
                                    <h4>downloads</h4>
                                </div>

                            </a>

                        </div>

                        <div class="button-google">
                            <a href="">

                                <div class="google-image">
                                    <img src="@/assets/svg/google-play.svg" alt="">
                                </div>

                                <div class="google-text">
                                    <p>get it on</p>
                                    <h4>downloads</h4>
                                </div>

                            </a>

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
        background-size: 65%;
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
                    transform: translateY(-45px) 
                                translateX(-30px)
                                rotate(-20deg);
                
                }

                70% {
                    transform: translateY(-50px) 
                                translateX(-33px)
                                rotate(-20deg);
                }

                to {
                    transform: translateY(-45px) 
                                translateX(-30px)
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
                    transform: translateX(-5px) 
                                translateY(0px)
                                rotate(-20deg);
                }

                70% {
                    transform: translateX(0px) 
                                translateY(10px)
                                rotate(-20deg);
                }

                to {
                    transform: translateX(-5px) 
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
                                translateY(-5px)
                }

                70% {
                    transform: translateX(0px) 
                                translateY(0px)
                }

                to {
                    transform: translateX(0px) 
                                translateY(-5px)
                }
            }
        }

        .forKids-pin {
            bottom: 140px;
            position: absolute;
            animation: 2s ease-in-out infinite forKids-animation;
            
            @keyframes forKids-animation {
                from {
                    transform: translateY(-5px)
                                translateX(-80px);
                }

                70% {
                    transform: translateY(0px)
                                translateX(-80px); 
                }
                
                to {
                    transform: translateY(-5px)
                                translateX(-80px); 
                }
            }
        }
        

        .container {

            padding-bottom: 150px;

            .column-50 {
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
                font-size: 62px;
                margin-bottom: 10px;
            }

            P {
                font-size: 26px;
                font-weight: 600;
            }
        }

        .downloads-buttons {
            display: flex;
            margin-top: 60px;

            .button-google {

                width: max-content;
                

                
                a {
                    text-decoration: none;
                    display: flex;
                    background-color: black;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 30px 10px 30px;

                }
                
                .google-text {

                    text-align: left;

                    h4 {
                        text-decoration: none;
                        text-transform: uppercase;
                        margin-top: 10px;
                        margin-bottom: 0px;
                        color: white;
                    }
                    
                    p {
                        margin-top: 0px;
                        margin-bottom: 0px;
                        color: white;
                    }
                   
                }

                .google-image {
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


   



    


</style>