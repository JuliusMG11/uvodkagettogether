<template>
  <div>
    <div class="land2">
      <div class="container">
        <div class="column-33">
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
        </div>

        <div class="column-33">
          <div class="mobile-title">
            <div class="background-title">
              <img src="@/assets/svg/cloud-liked.svg" alt="" />
            </div>

            <h3>Liked event and location</h3>
          </div>

          <section class="mobile-column">
            <div class="mobile-image">
              <img src="@/assets/png/home/liked.png" alt="" />
            </div>
          </section>
        </div>

        <div class="column-33">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.land2 {
  position: relative;
  background-image: url('~@/assets/svg/land2.svg');
  background-size: 104%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: bottom;
  padding-bottom: 0px;
  padding-top: 300px;
  top: 180px;
  background-position-y: -80px;

  .column-33 {
    h3 {
      z-index: 10;
      position: relative;
    }

    .mobile-column {
      display: flex;
      justify-content: center;
      z-index: 12;
      position: relative;
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
      top: -30px;

      .mobile-title {
        position: relative;
        top: -30px;
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
        left: -90px;
        bottom: 150px;
        z-index: 10;
      }

      .mobile-column {
        .mobile-image {
          max-width: 250px;
        }
      }
    }

    &:nth-child(2) {
      position: relative;
      top: -80px;

      .mobile-title {
        position: relative;
        top: -60px;

        .background-title {
          object-fit: cover;
          z-index: 6;
          position: relative;
          top: 60px;
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
      top: -120px;

      img {
        max-width: 250px;
      }

      .mobile-title {
        position: relative;
        top: -60px;

        .background-title {
          object-fit: cover;
          z-index: 6;
          position: relative;
          top: 60px;
        }
      }
    }
  }
}
</style>
