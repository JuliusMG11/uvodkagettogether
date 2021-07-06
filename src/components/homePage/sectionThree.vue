<template>
  <div>
    <div class="land3">
      <div class="road2">
        <img src="@/assets/svg/road-part-2.svg" alt="" />
      </div>
      <div class="container">
        <div class="column-33">
          <div class="background-title">
            <img src="@/assets/svg/cloud-category.svg" alt="" />
          </div>

          <div class="mobile-title">
            <h3>Registration</h3>
          </div>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/registration-category.png" alt="" />
            </div>
          </section>
        </div>

        <div class="column-33">
          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/register.png" alt="" />
            </div>
          </section>
        </div>

        <div class="column-33">
          <div class="background-title">
            <img src="@/assets/svg/cloud-category.svg" alt="" />
          </div>

          <div class="mobile-title">
            <h3>Treasure hunt</h3>
          </div>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/missions.png" alt="" />
            </div>
          </section>
        </div>
      </div>

      <div class="mountain">
        <div class="mountain-pin">
          <img src="@/assets/svg/category-pins/tourist-pin.svg" alt="" />
        </div>

        <img src="@/assets/svg/mountain.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.land3 {
  position: relative;
  background-image: url('~@/assets/svg/land3-new.svg');
  background-size: 101%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: bottom;
  padding-bottom: 150px;
  padding-top: 200px;
  top: 80px;
  background-position-y: 80px;

  &::before {
    position: absolute;
    content: '';
    background: radial-gradient(
      circle,
      rgba(249, 217, 14, 0.857656) 27%,
      rgba(249, 217, 14, 0.532726) 52%,
      rgba(249, 217, 14, 0) 74%,
      rgba(249, 217, 14, 0) 84%
    );
    width: 150px;
    height: 150px;
    top: 50px;
    right: -60px;
    border-radius: 50%;
    filter: blur(10px);
  }

  .mountain {
    position: absolute;
    right: 0px;
    bottom: 100px;
    max-width: 760px;
    z-index: 10;

    .mountain-pin {
      max-width: 70px;
      right: 10%;
      top: -70px;
      position: absolute;
      animation: 2s ease-in-out infinite tourist-animation;

      @keyframes tourist-animation {
        from {
          transform: translateY(-15px);
        }

        70% {
          transform: translateY(-10px);
        }

        to {
          transform: translateY(-15px);
        }
      }
    }
  }

  .column-33 {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &:nth-child(1) {
      position: relative;
      top: 50px;
      z-index: 10;
      justify-content: end;

      .mobile-title {
        position: relative;
        top: -55px;
      }

      .mobile-column {
        .mobile-image {
          max-width: 260px;
        }
      }
    }

    &:nth-child(2) {
      position: relative;
      top: -50px;
      z-index: 11;
      justify-content: end;

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/mobile-registration-object.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 200px;
        height: 40px;
        bottom: -16px;
        right: 70px;
      }
    }

    &:nth-child(3) {
      justify-content: start;
      z-index: 11;
      top: -120px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/mobile-events-object.svg');
        background-size: 110%;
        background-repeat: no-repeat;
        width: 200px;
        height: 50px;
        bottom: -5px;
        transform: translateX(-10px);
      }

      .mobile-title {
        position: relative;
        top: -55px;
      }

      .mobile-column {
        .mobile-image {
          max-width: 260px;
        }
      }
    }

    .mobile-column {
      display: flex;
      justify-content: center;
      position: relative;

      .mobile-image {
        max-width: 250px;
      }
    }
  }
}

.road2 {
  position: absolute;
  object-fit: cover;
  width: 100%;
  left: 0px;
  top: -150px;
  z-index: 9;
  left: -20px;
  max-width: 1330px;
}
</style>
