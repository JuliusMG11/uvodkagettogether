<template>
  <div class="about">
    <div class="container">
      
      <div class="column-30">
         <div class="hero-title">
            <h2>Our team</h2>
            <p>
              Sme jednoduchy ludia, ktory prisli s myslienkou, ze kazdy ma pravo na zabavu. 
              Chceme ludom poskytnut vsetky moznosti volnocasovych aktivit a vela dalsieho.
            </p>
          </div>
      </div>

      <div class="column-70">
        <div class="hero-section">

          <div class="hero-image">
            <img src="@/assets/png/about/hero-image.png" alt="" />
          </div>
        </div>
      </div>

    </div>

        <div class="profile-section">

          <div class="container">
          
            <div class="column-30">

              <div class="team-content">

                <div class="profile-image">
                  <img src="@/assets/svg/about/roman-avatar.svg" alt="">
                </div>

              </div>

              <h3>Roman</h3> 

            </div>

            <div class="column-30">

             <div class="team-content">

                <div class="profile-image">
                  <img src="@/assets/svg/about/simona-avatar.svg" alt="">
                </div>

              </div>

              <h3>Simona</h3>

            </div>

            <div class="column-30">

              <div class="profile-image">
                <img src="" alt="">
              </div>
              
              <h3>Julius</h3>
          
          </div>
        </div>
      </div>

    <footer-section />
  </div>
</template>

<script>
import FooterSection from '../components/FooterSection.vue'

export default {
  components: {
    FooterSection,
  },
}
</script>

<style lang="scss" scoped>

.container {
  align-items: center;
  justify-content: center;
  
 .hero-title {
    position:relative;
    text-align: left;
    font-size: 52px;

    h2 {
      font-weight: 900;
      margin-top: 0px;
      margin-bottom: 10px;
      color: #121212;
    }
  }
}


.hero-section {
  position: relative;
  padding-bottom: 100px;
  padding-top: 40px;
  display: flex;
  justify-content: end;


  .hero-image {
    max-width: 80%;
  }
}

.profile-section {
  background-image: url('~@/assets/png/about/team-land.png');
  background-size: 100%;
  background-repeat: no-repeat;
  padding-bottom: 100px;
  padding-top: 100px;

  .column-30 {
    justify-content: center;
    position: relative;

             &:nth-child(1) {
                top: -40px;

                 .profile-image {
                   max-width: 200px;
                }
             }

             &:nth-child(2) {

               left: 20px;
               top: -30px;

                .profile-image {
                  max-width: 320px;
                  position: relative;
                  z-index: 6;
                }

                h3 {
                  z-index: 5;
                }
             }

             &:nth-child(3) {
               
             }

    h3 {
      top: -70px;
      position: relative;
      font-size: 102px;
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 1000;
    }

    .team-content {

        display: flex;
        justify-content: center;
        position: relative;
        bottom: -20px;

    }         
  }
}
</style>
