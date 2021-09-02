<template>
  <div class="about">
    <div class="container">

      <div class="content-section">
      
        <div class="column-30">
          <div class="hero-text">
              <h2>Our team</h2>
              <p>
                We are a great group of people who came up with the idea that everyone 
                has the right to have a fun and even more idea is to have fun in one 
                place. Whether it’s a party event, sport event, theatres or just a tip 
                for a trip. We want to provide people with all the possibilities of 
                leisure activities or just made somebody´s day when looking for a treasure with a 
                certain prize. Our point is for everyone to find what they enjoy. 
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

               <div class="team-content">

                <div class="profile-image">
                  <img src="@/assets/svg/about/julius-avatar.svg" alt="">
                </div>

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
@import url('../scss/_variables.scss');

.container {
  align-items: center;
  justify-content: center;
  
  .content-section {

    display: flex;
    align-items: center;

     .hero-title {
        h2 {
          margin-top: 0px;
          margin-bottom: 10px;
      }
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
    max-width: 90%;
  }
}

.profile-section {
  background-image: url('~@/assets/png/about/team-land.png');
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 100px;

  .column-30 {
    justify-content: center;
    position: relative;

    .profile-image {
      max-width: 100%;
      width: 200px
    }

             &:nth-child(1) {
                top: -60px;

             }

             &:nth-child(2) {

               left: 20px;
               top: -50px;

                .profile-image {
                  position: relative;
                  z-index: 6;
                  width: 320px;
                }

                h3 {
                  z-index: 5;
                }
             }

             &:nth-child(3) {
                top: -140px;
             }

    h3 {
      top: -70px;
      position: relative;
      font-size: 5.125rem; // 102px;
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 1000;
      color: white;
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
