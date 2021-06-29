<template>
  <div class="">
    <div class="container">
      <div class="hero-section">
        <div class="column-30">
          <div class="hero-text">
            <h2>Pozrite si, co vsetko u nas najdete</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat quia ducimus odit voluptates. Explicabo odit in assumenda
            </p>
          </div>
        </div>
        <div class="column-70">
          <div class="right-hero-section">
            <img src="@/assets/svg/our-service-hero-bg.png" alt="" />
          </div>
        </div>
      </div>

      <div class="left-section">
        <div class="column-50">
          <div class="service-image">
            <div class="after-image">
              <img src="@/assets/png/home/register-category.png" alt="" />
            </div>

            <div class="before-image">
              <img src="@/assets/png/home/register.png" alt="" />
            </div>
          </div>
        </div>

        <div class="column-50">
          <div class="concert-pop-tag">
            <img
              src="@/assets/svg/our-service/tags/concert-popmusic.svg"
              alt=""
            />
          </div>

          <div class="culture-cinema-tag">
            <img
              src="@/assets/svg/our-service/tags/culture-cinema.svg"
              alt=""
            />
          </div>

          <div class="service-title">
            <h2>Registrácia</h2>
          </div>

          <div class="sevice-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat quia ducimus odit voluptates. Explicabo odit in assumenda
            </p>
          </div>

          <div class="forkids-zoo-tag">
            <img src="@/assets/svg/our-service/tags/forkids-zoo.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="column-50">
          <div class="service-title">
            <h2>
              Favorite location<br />
              and events
            </h2>
          </div>

          <div class="sevice-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat quia ducimus odit voluptates. Explicabo odit in assumenda
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
              <img src="@/assets/png/home/register-category.png" alt="" />
            </div>

            <div class="before-image">
              <img src="@/assets/png/home/register.png" alt="" />
            </div>
          </div>
        </div>

        <div class="column-50">
          <div class="service-title">
            <h2>Game</h2>
          </div>

          <div class="sevice-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat quia ducimus odit voluptates. Explicabo odit in assumenda
            </p>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="column-50">
          <div class="service-title">
            <h2>Calendar</h2>
          </div>

          <div class="sevice-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat quia ducimus odit voluptates. Explicabo odit in assumenda
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
.hero-section {
  display: flex;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  .hero-text {
    text-align: left;

    h2 {
      color: #121212;
      font-weight: 800;
      font-size: 62px;
      margin-top: 0px;
      margin-bottom: 10px;
      font-weight: 1000;
    }

    p {
      font-size: 18px;
    }
  }

  .right-hero-section {
    max-width: 100%;
    right: -80px;
    position: relative;
  }
}

.right-section {
  text-align: right;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  position: relative;
  align-items: center;

  .column-50 {
    position: relative;

    &:nth-child(2) {
      display: flex;
      justify-content: center;
    }

    .service-image {
      transform: skew(-5deg);

      img {
        width: 300px;
        z-index: 6;
        position: relative;
      }

      .after-image {
        z-index: 8;
        position: relative;
        left: 120px;
        top: 20px;
      }

      .before-image {
        position: absolute;
        top: -20px;
        left: -100px;
        z-index: 5;
        transform: skew(10deg);

        img {
          width: 380px;
        }
      }

      &::before {
        content: '';
        position: absolute;
        background: #2bdad1;
        width: 620px;
        height: 200px;
        bottom: -80px;
        right: -200px;
        z-index: 10;
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
    font-size: 52px;
    color: #121212;

    h2 {
      font-weight: 1000;
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
        width: 110px;
        height: 180px;
        top: -20px;
        left: 30px;
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
    }
  }

  .service-image {
    transform: skew(-5deg);

    img {
      width: 300px;
      z-index: 6;
      position: relative;
    }

    .before-image {
      z-index: 5;
      position: relative;
      left: 120px;
      top: -20px;
    }

    .after-image {
      position: absolute;
      top: 20px;
      left: -80px;
      z-index: 8;
      transform: skew(10deg);
    }

    &::before {
      content: '';
      position: absolute;
      background: #2bdad1;
      width: 620px;
      height: 200px;
      bottom: -80px;
      right: -200px;
      z-index: 10;
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

  .concert-pop-tag {
    top: -20px;
    width: 300px;

    &::before {
      background: #0ec8ff;
      width: 130px;
      height: 130px;
      top: 80px;
      left: 90px;
    }
  }

  .culture-cinema-tag {
    bottom: 20px;
    width: 220px;
    transform: translateX(-90px);

    &::before {
      background: #196dfc;
      width: 150px;
      height: 150px;
      top: 30px;
      left: 40px;
    }
  }

  .forkids-zoo-tag {
    width: 320px;
    top: 50px;
    right: -80px;

    &::before {
      background: #feb426;
      width: 150px;
      height: 150px;
      top: 70px;
      left: 86px;
    }
  }

  .service-title {
    font-size: 62px;
    color: #121212;

    h2 {
      font-weight: 1000;
      margin-bottom: 20px;
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
