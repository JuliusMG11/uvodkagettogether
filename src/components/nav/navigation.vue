<template>
  <div id="nav">
    <div class="navigation">
      <div class="section-logo">
        <img src="@/assets/svg/logo.svg" />
      </div>

      <div class="section-navigation">
        <router-link to="/">Úvod</router-link>
        <router-link to="/our-service">Naša služby</router-link>
        <router-link to="/about">O nás</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </div>
    </div>

    <div class="mobile-section-navigation">
      <div class="navigation-content">
      <router-link to="/">Úvod</router-link>
          <router-link to="/our-service">Naša služby</router-link>
          <router-link to="/about">O nás</router-link>
          <router-link to="/contact">Kontakt</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
#nav {
  max-width: 1400px;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }

    &.router-link-exact-active {
      color: #0CBFAC;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

     position: fixed;
      width: 1420px;
      z-index: 20;
      background: rgba(255, 255, 255, 0.801);
      padding: 10px;
      border-radius: 0px 0px 20px 20px;

    a {
      font-size: 20px;
    }

    .section-navigation {
    
      &::after {
        content: '';
        position: absolute;
        background-image: url('~@/assets/svg/menu-cloud.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 130px;
        height: 30px;
        top: 70px;
        right: 20px;
      }
    }

    .section-logo {
      img {
        max-width: 250px;
      }
    }
  }

  .mobile-section-navigation {
    display: flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    flex-direction: center;
    padding: 40px 30px 40px 30px;
    background: #12121260;
    width: 100%;
    height: 100%;
    display: none;

    .navigation-content {
      justify-content: center;
      display: flex;
    }
  }
}
</style>
