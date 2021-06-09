<template>
      <div id="nav">
          <div class="navigation">
            
            <div class="section-logo">
              <img src="@/assets/svg/logo.svg" >
            </div>

            <div class="section-navigation">

                <router-link to="/">Úvod</router-link>
                <router-link to="/about">Naša služby</router-link>
                <router-link to="#">O nás</router-link>
                <router-link to="#">Kontakt</router-link>
            </div>
          </div>
        </div>
</template>

<script>

export default {
    components: {
       

    }
}

</script>


<style lang="scss" scoped>
#nav {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
 

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 20px;

    &:last-child {
      margin-right: 0px;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    
    .section-navigation::after {
      content: "";
      position: absolute;
      background-image: url('~@/assets/svg/menu-cloud.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      width: 130px;
      height: 30px;
      top: 70px;
      right: 20px;
    }
  
    .section-logo {

      img {
         max-width: 250px;
      }
    }

  }
}
</style>