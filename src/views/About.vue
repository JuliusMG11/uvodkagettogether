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

        <div class="profile-section">
          
        <div class="column-30">

          <div class="profile-image">
            <img src="@/assets/profile-picture.jpg" alt="">
          </div>

          <h3>Roman</h3>
          <p>
            Naša hlava, ktorá ma na všetko odpoveď. Stará sa hlavne o programovanie celej aplikácie od backendu pro frontend
          </p>
        </div> 
         <div class="column-30">
            <div class="profile-image">
            <img src="@/assets/profile-picture.jpg" alt="">
          </div>

          <h3>Simona</h3>
          <p>
            Jedina zenska ruka v tyme, ktora nam pomaha so vsetkym co potrebujeme.
          </p>
        </div>
         <div class="column-30">

            <div class="profile-image">
            <img src="@/assets/profile-picture.jpg" alt="">
          </div>
          <h3>Julius</h3>
          <p>
            Julo sa stara a dizajnovu cast a snazi sa Romanovy pomahat s frontendom.
          </p>
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
  display: flex;
  justify-content: center;

  .column-30 {
    padding: 30px;
    margin-right: 30px;
    box-shadow:  5px 5px 10px #d9d9d9,
             -5px -5px 10px #ffffff;

             &:nth-child(1) {
                border-radius: 50% 20% 20% 20%;
             }

             &:nth-child(2) {
               border-radius: 20% 20% 20% 20%;
             }

             &:nth-child(3) {
               border-radius: 20% 50% 20% 20%;
             }

    .profile-image {

      
      img {
        border-radius: 50%;
        height: 150px;
        width: 150px;

        box-shadow: 3px 1px 20px #1f999398;
      }
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
