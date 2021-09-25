<template>
  <div id="nav" class="flex justify-center">
    <div class="navigation container mx-auto px-4 fixed z-20 bg-white">
        <div class="grid grid-cols-3 gap-4">
          
          <div class="section-logo">
            <img src="@/assets/svg/logo.svg" />
          </div>

          <div class="section-navigation col-span-2">
            <router-link to="/">Úvod</router-link>
            <router-link to="/our-service">Naša služby</router-link>
            <router-link to="/about">O nás</router-link>
            <router-link to="/contact">Kontakt</router-link>
          </div>

          <div class="open-button" @click="openMenu()">
            <img src="@/assets/svg/navigation/menu.svg" alt="" />
          </div>
          
        </div>
      </div>
   

    <div class="mobile-section-navigation" :class="{ active: isActive }">
      <div class="close-button" @click="closeMenu()">
        <img src="@/assets/svg/navigation/back.svg" alt="" />
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
export default {
  data() {
    return {
      isActive: false,
    }
  },

  components: {},
  methods: {
    openMenu() {
      this.isActive = true
      // this.isActive = !this.isActive;
      console.log('debil')
    },

    closeMenu() {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
#nav {
  .open-button {
    position: relative;
    max-width: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }

    &.router-link-exact-active {
      color: #0cbfac;
    }
  }

  .navigation {
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
    display: none;
    z-index: 20;

    .close-button {
      position: absolute;
      max-width: 30px;
      top: 14px;
      right: 30px;

      &:hover {
        cursor: pointer;
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

  .active {
    display: flex;
  }
}
</style>
