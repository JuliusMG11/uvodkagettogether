<template>
  <div id="nav">
    <div class="navigation">
      <div class="container">
        <div class="column-30">
          <div class="section-logo">
            <img src="@/assets/svg/logo.svg" />
          </div>
        </div>
        <div class="column-70">
          <div class="section-navigation">
            <router-link to="/">Úvod</router-link>
            <router-link to="/our-service">Naša služby</router-link>
            <router-link to="/about">O nás</router-link>
            <router-link to="/contact">Kontakt</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-section-navigation" :class="{ active: isActive }">

      <div class="exit-button">
        <link-exit-icon 
          @click="exitMenu()"
        />
      </div>

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
import linkExitIcon from '../UI/linkExitIcon.vue';

export default {
  
  data() {
    return {
       isActive: true
    }
  },

  components: {

    linkExitIcon

  },
  methods: {
    exitMenu() {


      this.isActive = !this.isActive;
      
      console.log('debil');
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {

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
      position: fixed;
      width: 100%;
      z-index: 20;
      background: rgba(255, 255, 255, 0.932);
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 0px 0px 20px 20px;

    a {
      font-size: 20px;
    }

    .section-navigation {
      display: flex;
      justify-content: end;
      align-items: center;
      height: 100%;
    
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

      display: flex;
      justify-content: start;
      align-items: center;

      img {
        max-width: 250px;
      }
    }
  }

  .mobile-section-navigation {

    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    left: 0px;
    bottom: 0px;
    padding: 40px 30px 40px 30px;
    background: #121212c5;
    width: 100%;
    height: 100%;
    z-index: 20;

    .exit-button {
      position: absolute;
      top: 40px;
      right: 40px;

      svg {
        width: 60px;
        height: 60px;
      }

    }

    .navigation-content {
      display: flex;
        justify-content: center;
      align-items: center;
      flex-direction: column;
      
      a {
        margin-right: 0px;
        font-size: 52px;
        padding-top: 20px;
        color: white;

        &:first-child {
          padding-top: 0px;
        }
      }
    }
  }

  .isActive {
    display: none;
  }

  .nonactve {
    display: none;
  }
}
</style>
