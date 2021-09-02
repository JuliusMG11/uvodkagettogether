<template>
    <div class="container">
        <article class="column-33">
          <div class="background-title">
            <img src="@/assets/svg/cloud-category.svg" alt="" />
          </div>

          <div class="mobile-title">
            <h3>Category</h3>
          </div>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/category-menu.png" alt="" />
            </div>
          </section>
        </article>

        <article class="column-33">
          <section class="mobile-title">
            <div class="background-title">
              <img src="@/assets/svg/cloud-liked.svg" alt="" />
            </div>

            <h3>Liked event and location</h3>
          </section>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/liked.png" alt="" />
            </div>
          </section>
        </article>

        <article class="column-33">
          <div class="background-title">
            <img src="@/assets/svg/cloud-category.svg" alt="" />
          </div>

          <div class="mobile-title">
            <h3>Calendar</h3>
          </div>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/calendar.png" alt="" />
            </div>
          </section>
        </article>
      </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">


  .column-33 {



    h3 {
      z-index: 10;
      position: relative;
      font-size: 1.375rem;
      font-weight: 700;
    }

    .mobile-column {
      display: flex;
      justify-content: center;
      z-index: 12;
      position: relative;

      .mobile-image {
        max-width: 250px;
      }
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
      top: -50px;

      .mobile-title {
        position: relative;
        top: -20px;
      }

      .background-title {
        object-fit: cover;
        z-index: 6;
        position: relative;
        top: 30px;
        max-width: 250px;
      }

      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/man-phone.svg');
        background-repeat: no-repeat;
        background-size: 80%;
        width: 200px;
        height: 337px;
        left: -20px;
        bottom: 60px;
        z-index: 10;
      }

    }

    &:nth-child(2) {
      position: relative;
      top: -120px;

      .mobile-title {
        position: relative;
        top: -60px;

        .background-title {
          object-fit: cover;
          z-index: 6;
          position: relative;
          top: 50px;
          max-width: 350px;
        }
      }

      .mobile-column {
        .mobile-image {
          max-width: 340px;
        }
      }
    }

    &:nth-child(3) {
      position: relative;
      top: -160px;

      .mobile-title {
        position: relative;
        top: -50px;

        .background-title {
          object-fit: cover;
          z-index: 6;
          position: relative;
          top: 60px;
        }
      }
    }
  }
</style>
