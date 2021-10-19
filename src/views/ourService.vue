<template>
  <div class="our-service">
      <div class="md:container md:mx-auto px-4 flex justify-center items-center grid grid-cols-2 gap-4 pt-24 bt-24">
        <section class="hero-text">
            <h2 class="mb-0 mt-0 text-xxl">See what you will find in our new app Gettogether</h2>
            <p>
              In Gettogether you will find many interesting functions from
              registration through the calendar to an overview of events and
              many other interesting options. You will not get lost with us in
              he world of entertainment, sports or leisure activities.
            </p>
        </section>
        <section class="right-hero-section relative -right-2">
            <img src="@/assets/svg/our-service/hero-background.svg" alt="" />
        </section>
      </div>

      <div class="left-section md:container md:mx-auto px-4 relative grid grid-cols-2 items-center pt-20">
        <section class="flex justify-center pr-16">
          <div class="service-image">
            <figure class="after-image absolute z-20 top-0 -left-8">
              <img src="@/assets/png/home/registration-category.png" alt="" />
            </figure>

            <figure class="before-image relative z-10 left-28 -top-8">
              <img src="@/assets/png/home/register.png" alt="" />
            </figure>
          </div>
        </section>

        <section class="text-left relative">
          <div class="concert-pop-tag bg-pop-circle absolute z-10 -top-40">
            <p>Pop Music</p>
          </div>

          <div class="culture-cinema-tag bg-culture-circle absolute z-10 top-40 -left-40">
            <p>Cinema</p>
          </div>

          <div class="service-title">
            <h3>Registration</h3>
          </div>

          <div class="sevice-text">
            <p>
              When you register, use the opportunity to click and choose your
              range of interest such as the genre of music, different types of
              culture or sports to customize the display of events or places
              that you like or interest you. Through your selected circuits, a
              map will be generated that will be specific to each user with
              his/her interests.
            </p>
          </div>

          <div class="forkids-zoo-tag bg-forkids-circle  absolute z-10 -top-28 -right-10">
            <p>Zoo</p>
          </div>
        </section>
      </div>

      <div class="right-section  md:container md:mx-auto px-4 relative grid grid-cols-2 items-center pt-20 pb-20">
        <section class="text-left relative">
          <figure class="like-image transform -rotate-45 absolute -top-8 -left-12">
            <img src="@/assets/svg/our-service/like.svg" alt="" />
          </figure>

          <div class="service-title">
            <h3>Favorite location and events</h3>
          </div>

          <div class="sevice-text">
            <p>
              You will be able to add any event or permanent location as a
              gallery, cinema, or workout spot, to your favorites. So, you will
              never lose it and at the same time you can find it easy.
            </p>
          </div>
        </section>

        <section class="flex justify-center">
          <div class="service-image">
            <figure class="after-image relative z-20 left-24 top-2">
              <img src="@/assets/png/our-service/detail-event.png" alt="" />
            </figure>

            <figure class="before-image absolute z-10 -left-20 -top-2">
              <img src="@/assets/png/our-service/liked.png" alt="" />
            </figure>
          </div>
        </section>
      </div>

      <div class="left-section md:container md:mx-auto px-4 relative grid grid-cols-2 items-center pt-20 pb-20">
        <section class="flex justify-center">
          <div class="service-image">
            <figure class="after-image absolute z-20 top-0 -left-8">
              <img src="@/assets/png/our-service/detail-mission.png" alt="" />
            </figure>

            <figure class="before-image relative z-10 left-28 -top-8">
              <img src="@/assets/png/our-service/map-mission.png" alt="" />
            </figure>
          </div>
        </section>

        <section class="text-left relative pb-32">
          <div class="service-title">
            <figure class="tresure-image relative w-32 -top-8 right-6 transform -rotate-12">
              <img src="@/assets/svg/our-service/tresure.svg" alt="" />
            </figure>

            <figure class="funcoins-image absolute transform rotate-12 top-8 right-6">
              <img class="w-16" src="@/assets/svg/our-service/funcoins.svg" alt="" />
            </figure>

            <h3 class="relative">Game</h3>
          </div>

          <div class="sevice-text">
            <p>
              In our app you will also find the game “treasure hunt”, in which
              you will be able to discover new and new treasures with the help
              of points (funcoins). The treasure contains different kinds of
              prize for example vouchers or discount coupons. The game starts by
              revealing the circuit on the map where the treasure is located and
              you will be able to search for it with using your camera in mobile
              phone. Based on your support and trust in the future, we are also
              planning many other interactive games to made your day.
            </p>
          </div>
        </section>
      </div>

      <div class="right-section  md:container md:mx-auto px-4 flex relative grid grid-cols-2 items-center pt-20">
        <section class="text-left relative">
          <div class="service-title">
            <h3>Calendar</h3>
          </div>

          <div class="sevice-text">
            <p>
              You can plan your favorite events in the calendar thanks to which
              you will not miss anything. Simply said, when you click “like”
              button, the event will be marked into your calendar.
            </p>
          </div>
        </section>

        <section class="flex justify-center">
          <div class="service-image">
            <figure class="after-image-two relative z-20 left-28 -top-8">
              <img src="@/assets/png/our-service/calendar-day.png" alt="" />
            </figure>

            <figure class="before-image-two absolute z-10 top-0 -left-8">
              <img src="@/assets/png/our-service/calendar-mounth.png" alt="" />
            </figure>
          </div>
        </section>
      </div> 

    <footer-section />
  </div>
</template>

<script>
import FooterSection from '../components/homePage/sectionFooter.vue'

export default {
  components: {
    FooterSection,
  },
}
</script>

<style lang="scss" scoped>
@import url('../scss/_animation.scss');


.right-section {

    .service-image {
      perspective: 1000px;
      animation: 4s ease-out infinite image-animation;
      animation-direction: alternate;
      animation-fill-mode: none;

      img {
        width: 220px;
       
      }

      .after-image {
        transform: rotateY(-18deg) rotateZ(3deg);
        -webkit-transform: rotateY(-18deg) rotateZ(3deg);
        -moz-transform: rotateY(-18deg) rotateZ(3deg);
        -ms-transform: rotateY(-18deg) rotateZ(3deg);
        -o-transform: rotateY(-18deg) rotateZ(3deg);
      }

      .before-image {
        transform: rotateY(18deg) rotateZ(-3deg);

        img {
          width: 300px;
        }
      }

      .after-image-two {
        transform: rotateY(-18deg) rotateZ(3deg);
        img {
          width: 280px;
        }
      }

      .before-image-two {
  
        transform: rotateY(18deg) rotateZ(-3deg);

        img {
          width: 240px;
        }
      }

      &::before {
        content: '';
        position: absolute;
        background: #2bdad1;
        width: 500px;
        height: 160px;
        bottom: -50px;
        right: -170px;
        z-index: 4;
        border-radius: 60% 50% 60% 50%;
        opacity: 0.5;
        transform: skew(-10deg);
        border: solid 3px #125956;
        border: solid 3px #125956;
        box-shadow: 0px 10px 0px #125956;
      }
    }
  
  .service-title {
    h3 {

      &::before {
        position: absolute;
        content: '';
        background-image: url('~@/assets/svg/our-service/funny-things.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 90px;
        height: 180px;
        top: -50px;
        left: -20px;
        z-index: 5;
        transform: rotate(50deg);
      }
    }
  }
}

.left-section {


  .service-image {
    perspective: 1000px;
    animation: 4s ease-out infinite image-animation;
    animation-direction: alternate;
    animation-fill-mode: none;

    img {
      width: 220px;
    }

    .before-image {
      transform: rotateY(-18deg) rotateZ(3deg);
    }

    .after-image {
      transform: rotateY(18deg) rotateZ(-3deg);
    }

    &::before {
      content: '';
      position: absolute;
      background: #2bdad1;
      width: 500px;
      height: 160px;
      bottom: -50px;
      right: -170px;
      z-index: 4;
      border-radius: 60% 50% 60% 50%;
      opacity: 0.5;
      transform: skew(-10deg);
      border: solid 3px #125956;
      border: solid 3px #125956;
      box-shadow: 0px 10px 0px #125956;
    }
  }

  .culture-cinema-tag,
  .concert-pop-tag,
  .forkids-zoo-tag {
    background-size: 100%;
    width: 140px;
    height: 122px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: white;
    }
  }

  .culture-cinema-tag::before,
  .concert-pop-tag::before,
  .forkids-zoo-tag::before {
    position: absolute;
    content: '';
    filter: blur(10px);
    z-index: -1;
    border-radius: 50%;
  }

  .culture-cinema-tag,
  .concert-pop-tag,
  .forkids-zoo-tag {
    p {
      font-weight: 800;
      font-size: 1.25rem; // 20px
    }
  }

  .concert-pop-tag {
    &::before {
      background: #0ec8ff;
      width: 130px;
      height: 130px;
      top: 0px;
      left: 10px;
    }
  }

  .culture-cinema-tag {
    &::before {
      background: #196dfc;
      width: 150px;
      height: 150px;
      top: -10px;
      left: 0px;
    }
  }

  .forkids-zoo-tag {

    &::before {
      background: #feb426;
      width: 150px;
      height: 150px;
      top: -10px;
      left: 0px;
    }
  }

  .service-title {

    &:nth-child(1) {
      h3 {
        &::before {
          bottom: -70px;
        }
      }
    }

    .tresure-image {

      &::after {
        content: '';
        position: absolute;
        bottom: -17px;
        right: -30px;
        border-radius: 50%;
        width: 160px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: -1;
        filter: blur(11px);
      }
    }

    .funcoins-image {

      &::after {
        content: '';
        position: absolute;
        width: 70px;
        height: 30px;
        right: -10px;
        bottom: -4px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: -1;
        filter: blur(11px);
      }
    }

    h3 {

      &::before {
        position: absolute;
        content: '';
        background-image: url('~@/assets/svg/our-service/funny-things.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 110px;
        height: 180px;
        bottom: 60px;
        left: -20px;
        z-index: 5;
        transform: rotate(50deg);
      }
    }
  }
}
</style>
