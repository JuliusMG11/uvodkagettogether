<template>
    <div class="contact-page">

        <div class="hero-image">
              
            <div class="container">
       
                <div class="column-50">
                    <div class="hero-text">
                        <h2>Nevahajte nas kontaktovat</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, debitis
                        </p>
                    </div>
                    
                </div>
                <div class="column-50">
                
                </div>
            

            </div>
        </div>

        <div class="contact-land">

            <div class="container">
                    
                <div class="column-50">

                </div>
                <div class="column-50">
                    <div class="contact-content">
                        <div class="contact-board">
                            <a href="mailto:info@gettogether.eu">info@gettogether.eu</a>
                            <a href="tel:+420222222222">+420 222 222 222</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <footer-section />

    </div>
    
</template>

<script>
import FooterSection from '../components/homePage/sectionFooter.vue';

    export default {
         components: {
            FooterSection,
        },
    }
</script>

<style lang="scss" scoped>


.hero-image {
    background-image: url('~@/assets/png/contact/hero-image-new.png');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position-x: right;
    padding-bottom: 100px;

    .container {
        display: flex;
        align-items: center;

        
        .hero-text {
            font-size: 52px;
            text-align: left;
            color: #121212;
            padding-right: 70px;
            padding-top: 100px;

            h2 {
                font-weight: 900;
                margin-bottom: 10px;
            }
        }
    }
}

.contact-land {
    position: relative;
    background-image: url('~@/assets/svg/contact/contact-land.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 580px;

    .contact-content {
        position: relative;
        background-image: url('~@/assets/svg/contact/contact-man.svg');
        background-size: 60%;
        background-repeat: no-repeat;
        height: 400px;
        background-position-Y: 90px;

        .contact-board {
            width: 200px;
            height: 50px;
            top: 160px;
            left: 30px;
            display: flex;
            flex-direction: column;
            position: relative;

            a {
                color: white;
                font-weight: 900;
                font-size: 22px;
                text-decoration: unset;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0px;
                }
            }
        }
    }

}
    

</style>