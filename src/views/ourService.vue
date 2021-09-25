<template>
  <div class="our-service">
    <div class="container">
      <div class="hero-section">
        <div class="column-50">
          <div class="hero-text">
            <h1>See what you will find in our new app Gettogether</h1>
            <p>
              In Gettogether you will find many interesting functions from
              registration through the calendar to an overview of events and
              many other interesting options. You will not get lost with us in
              he world of entertainment, sports or leisure activities.
            </p>
          </div>
        </div>
        <div class="column-50">
          <div class="right-hero-section">
            <img src="@/assets/svg/our-service/hero-background.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="left-section">
        <div class="column-50">
          <div class="service-image">
            <div class="after-image">
              <img src="@/assets/png/home/registration-category.png" alt="" />
            </div>

            <div class="before-image">
              <img src="@/assets/png/home/register.png" alt="" />
            </div>
          </div>
        </div>

        <div class="column-50">
          <div class="concert-pop-tag">
            <p>Pop Music</p>
          </div>

          <div class="culture-cinema-tag">
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

          <div class="forkids-zoo-tag">
            <p>Zoo</p>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="column-50">
          <div class="like-image">
            <img src="@/assets/svg/our-service/like.svg" alt="" />
          </div>

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
        </div>

        <div class="column-50">
          <div class="service-image">
            <div class="after-image">
              <img src="@/assets/png/our-service/detail-event.png" alt="" />
            </div>

            <div class="before-image">
              <img src="@/assets/png/our-service/liked.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="left-section">
        <div class="column-50">
          <div class="service-image">
            <div class="after-image">
              <img src="@/assets/png/our-service/detail-mission.png" alt="" />
            </div>

            <div class="before-image">
              <img src="@/assets/png/our-service/map-mission.png" alt="" />
            </div>
          </div>
        </div>

        <div class="column-50">
          <div class="service-title">
            <div class="tresure-image">
              <img src="@/assets/svg/our-service/tresure.svg" alt="" />
            </div>

            <div class="funcoins-image">
              <img src="@/assets/svg/our-service/funcoins.svg" alt="" />
            </div>

            <h3>Game</h3>
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
        </div>
      </div>

      <div class="right-section">
        <div class="column-50">
          <div class="service-title-calendar">
            <h3>Calendar</h3>
          </div>

          <div class="sevice-text">
            <p>
              You can plan your favorite events in the calendar thanks to which
              you will not miss anything. Simply said, when you click “like”
              button, the event will be marked into your calendar.
            </p>
          </div>
        </div>

        <div class="column-50">
          <div class="service-image">
            <div class="after-image-two">
              <img src="@/assets/png/our-service/calendar-day.png" alt="" />
            </div>

            <div class="before-image-two">
              <img src="@/assets/png/our-service/calendar-mounth.png" alt="" />
            </div>
          </div>
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
@import url('../scss/_animation.scss');

p {
  line-height: 1.5;
  font-weight: 500;
}

.hero-section {
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 60px;

  .hero-text {
    h2 {
      margin-top: 0px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
    }
  }

  .right-hero-section {
    max-width: 100%;
    right: -30px;
    position: relative;
    height: auto;
  }
}

.right-section {
  text-align: right;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  position: relative;
  align-items: center;

  .like-image {
    position: absolute;
    top: -20px;
    max-width: 30%;
    transform: rotate(-20deg);
    max-width: 100%;
  }

  .column-50 {
    position: relative;

    &:nth-child(2) {
      display: flex;
      justify-content: center;
      padding-left: 50px;
    }

    .service-image {
      perspective: 1000px;
      animation: 4s ease-out infinite image-animation;
      animation-direction: alternate;
      animation-fill-mode: none;

      img {
        width: 220px;
        z-index: 6;
        position: relative;
      }

      .after-image {
        z-index: 8;
        position: relative;
        left: 100px;
        top: 10px;
        transform: rotateY(-18deg) rotateZ(3deg);
        -webkit-transform: rotateY(-18deg) rotateZ(3deg);
        -moz-transform: rotateY(-18deg) rotateZ(3deg);
        -ms-transform: rotateY(-18deg) rotateZ(3deg);
        -o-transform: rotateY(-18deg) rotateZ(3deg);
      }

      .before-image {
        position: absolute;
        top: -10px;
        left: -80px;
        z-index: 5;
        transform: rotateY(18deg) rotateZ(-3deg);

        img {
          width: 280px;
        }
      }

      .after-image-two {
        z-index: 8;
        position: relative;
        left: 100px;
        top: 20px;
        transform: rotateY(-18deg) rotateZ(3deg);
        img {
          width: 240px;
        }
      }

      .before-image-two {
        position: absolute;
        top: -20px;
        left: -50px;
        z-index: 5;
        transform: rotateY(18deg) rotateZ(-3deg);

        img {
          width: 220px;
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
  }

  .service-title {
    h3 {
      margin-bottom: 20px;
      margin-top: 10px;
      z-index: 6;
      position: relative;

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

  .service-title-calendar {
    color: #121212;

    h3 {
      &::before {
        position: absolute;
        content: '';
        background-image: url('~@/assets/svg/our-service/funny-things.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 110px;
        height: 180px;
        top: -50px;
        right: 20%;
        z-index: 5;
        transform: rotate(50deg);
      }
    }
  }
}

.left-section {
  text-align: left;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  position: relative;
  align-items: center;

  .column-50 {
    &:nth-child(1) {
      display: flex;
      justify-content: center;
      padding-right: 50px;
    }
  }

  .service-image {
    perspective: 1000px;
    animation: 4s ease-out infinite image-animation;
    animation-direction: alternate;
    animation-fill-mode: none;

    img {
      width: 220px;
      z-index: 6;
      position: relative;
    }

    .before-image {
      z-index: 5;
      position: relative;
      left: 100px;
      top: -20px;
      transform: rotateY(-18deg) rotateZ(3deg);
    }

    .after-image {
      position: absolute;
      top: 20px;
      left: -50px;
      z-index: 8;
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
    position: absolute;
    z-index: 4;
    background-size: 100%;
    background-repeat: no-repeat;
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
    top: -20px;
    background-image: url('~@/assets/svg/our-service/tags/concert-popmusic-new.svg');

    &::before {
      background: #0ec8ff;
      width: 130px;
      height: 130px;
      top: 0px;
      left: 10px;
    }
  }

  .culture-cinema-tag {
    bottom: 20px;
    background-image: url('~@/assets/svg/our-service/tags/culture-cinema.svg');
    transform: translateX(-120px);

    &::before {
      background: #196dfc;
      width: 150px;
      height: 150px;
      top: -10px;
      left: 0px;
    }
  }

  .forkids-zoo-tag {
    background-image: url('~@/assets/svg/our-service/tags/forkids-zoo.svg');
    top: 50px;
    right: 50px;

    &::before {
      background: #feb426;
      width: 150px;
      height: 150px;
      top: -10px;
      left: 0px;
    }
  }

  .service-title {
    color: #121212;

    .tresure-image {
      position: absolute;
      top: 90px;
      max-width: 100px;
      right: 5%;
      transform: rotate(20deg);
      z-index: 8;

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
      position: absolute;
      top: 22%;
      width: 50px;
      right: 18%;
      transform: rotate(-10deg);

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
      margin-top: 0px;
      z-index: 6;
      position: relative;

      &::before {
        position: absolute;
        content: '';
        background-image: url('~@/assets/svg/our-service/funny-things.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 110px;
        height: 180px;
        bottom: -60px;
        left: -20px;
        z-index: 5;
        transform: rotate(50deg);
      }
    }
  }
}
</style>
