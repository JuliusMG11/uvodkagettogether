<template>
  <div class="contact-page">
    <div class="hero-image">
      <div class="md:container md:mx-auto px-4 flex justify-center items-center grid grid-cols-2 gap-4 pt-24 bt-24">
        <section class="">
          <div class="hero-text">
            <h2>Nevahajte nas kontaktovat</h2>
            <p>
              Do you want to join the Dream Team and make a cooperation? Do you
              have any tips or ideas how to improve our app? Contact us. Every
              opinion counts and we will be happy for any feedback you can give
              us. Let’s make the world of entertainment together.
            </p>
          </div>

          <div class="flex mt-8">
            <div class="button-social">
              <downloads-button
                title="Google play"
                text="Download on the"
                buttonLogo="google-play.svg"
              />
            </div>

            <div class="button-social ml-6">
              <downloads-button
                title="App store"
                text="Download on the"
                buttonLogo="app-store.svg"
              />
            </div>
          </div>
        </section>
        <section class="">
          <figure class="right-image relative">
            <img src="@/assets/svg/contact/hero-image-new.svg" alt="" />
          </figure>
        </section>
      </div>
    </div>

    <div class="contact-land relaitve ">
      <div class="md:container md:mx-auto px-4 flex justify-center items-center grid grid-cols-2 gap-4 pt-24">
        <section>

        </section>

        <section>
          <contact-billboard />
        </section>

        </div>
     
    </div>

    <footer-section />
  </div>
</template>

<script>
import footerSection from '../components/homePage/sectionFooter.vue'
import downloadsButton from '../components/UI/downloadsButton.vue'
import contactBillboard from '../components/UI/contactBillboard.vue'

export default {
  components: {
    footerSection,
    downloadsButton,
    contactBillboard
  },
}
</script>

<style lang="scss" scoped>
.hero-image {

    .right-image {
      right: 30px;
      width: 800px;

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/contact/telephone-both.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 80px;
        height: 200px;
        top: 190px;
        left: 2%;
      }
    }


      .button-social {
        width: max-content;
      }

    .telephone-both {
      position: relative;
      width: 70px;
      height: 0px;
      bottom: -60px;
    }
}

.contact-land {
  background-image: url('~@/assets/svg/contact/contact-land.svg');
  background-size: 103%;
  background-repeat: no-repeat;
  height: 100%;
  left: -1px;
  padding-top: 180px;
  margin-bottom: 80px;
  background-position: bottom;

  .contact-kid {
    position: relative;
    width: 160px;
    bottom: -60px;
  }
}
</style>
