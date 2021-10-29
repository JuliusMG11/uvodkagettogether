<template>
  <div class="md:container md:mx-auto grid grid-cols-3 gap-4">
    <article class="flex items-center flex-col relative -top-20">
      <div class="background-title relative z-5 top-2 object-cover">
        <img src="@/assets/svg/cloud-category.svg" alt="" />
      </div>

      <div class="mobile-title relative -top-10">
        <h3>Category</h3>
      </div>

      <section class="mobile-column flex justify-center z-10 relative">
        <div class="mobile-image">
          <img src="@/assets/png/home/category-menu.png" alt="" />
        </div>
      </section>
    </article>

    <article class="flex items-center flex-col relative -top-36">
      <section class="mobile-title relative -top-18">
        <div class="background-title">
          <img src="@/assets/svg/cloud-liked.svg" alt="" />
        </div>
        <div class="mobile-title relative -top-12">
          <h3>Liked event and location</h3>
        </div>
      </section>

      <section class="mobile-column flex justify-center z-10 relative">
        <div class="mobile-image">
          <img src="@/assets/png/home/liked.png" alt="" />
        </div>
      </section>
    </article>

    <article class="flex items-center flex-col relative -top-44">
      <div class="background-title">
        <img src="@/assets/svg/cloud-category.svg" alt="" />
      </div>

      <div class="mobile-title relative -top-12">
        <h3>Calendar</h3>
      </div>

      <section class="mobile-column flex justify-center z-10 relative">
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


article {
    h3 {
      z-index: 10;
      position: relative;
      font-size: 1.375rem;
      font-weight: 700;
    }

  .mobile-column {
    .mobile-image {
      max-width: 250px;

      // RESPONSIVE

      @include breakpoint(computer) {
        max-width: 90%;
      }

      @include breakpoint(bigScreen) {
        max-width: 100%;
      }
    }

    .mobile-title {
       object-fit: cover;
        z-index: 6;
        position: relative;
    }

  }


  &:nth-child(1) {


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

    .mobile-title {
      .background-title {
        top: 50px;
        max-width: 350px;
      }
    }

    .mobile-column {
      .mobile-image {
        max-width: 340px;

          // RESPONSIVE

        @include breakpoint(computer) {
          max-width: 90%;
        }

         @include breakpoint(bigScreen) {
          max-width: 100%;
        }
      }
    }
  }

}
</style>
