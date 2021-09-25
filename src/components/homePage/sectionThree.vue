<template>
  <div>
    <div class="md:container md:mx-auto grid grid-cols-3 gap-4">
      <article>
        <figure class="background-title">
          <img src="@/assets/svg/cloud-category.svg" alt="" />
        </figure>

        <div class="mobile-title">
          <h3>Registration</h3>
        </div>

        <section class="mobile-column">
          <figure class="mobile-image">
            <img src="@/assets/png/home/registration-category.png" alt="" />
          </figure>
        </section>
      </article>

      <article>
        <section class="mobile-column">
          <figure class="mobile-image">
            <img src="@/assets/png/home/register.png" alt="" />
          </figure>
        </section>
      </article>

      <article>
        <figure class="background-title">
          <img src="@/assets/svg/cloud-category.svg" alt="" />
        </figure>

        <div class="mobile-title">
          <h3>Treasure hunt</h3>
        </div>

        <section class="mobile-column">
          <figure class="mobile-image">
            <img src="@/assets/png/home/missions.png" alt="" />
          </figure>
        </section>
      </article>
    </div>

    <div class="mountain">
      <div class="mountain-pin">
        <img src="@/assets/svg/category-pins/tourist-pin.svg" alt="" />
      </div>

      <img src="@/assets/svg/mountain.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mountain {
  position: absolute;
  right: 0px;
  bottom: 60px;
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

article {
  h3 {
    z-index: 10;
    position: relative;
    font-size: 1.375rem;
    font-weight: 700;
  }

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
      top: -45px;
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
      top: -45px;
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
</style>
