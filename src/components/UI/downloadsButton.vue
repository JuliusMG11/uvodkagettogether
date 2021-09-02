<template>
  <button class="btn-hover color-1" href="#">
    <div class="social-image">
      <img :src="require(`../../assets/svg/${buttonLogo}`)" alt="" />
    </div>

    <div class="social-text">
      <p>{{ text }}</p>
      <h4>{{ title }}</h4>
    </div>
  </button>
</template>

<script>
export default {
  props: ['title', 'text', 'buttonLogo'],

}
</script>

<style lang="scss" scoped>
button {
  text-decoration: none;
  display: flex;
  background-color: black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 10px 30px;
}

.btn-hover {
  background-size: 300% 100%;
  cursor: pointer;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border: none;
}

.btn-hover:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.social-text {
  text-align: left;

  h4 {
    text-decoration: none;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-size: 24px;
    font-weight: 500;
  }


  p {
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
  }
}

.social-image {
  padding-right: 20px;
  img {
    max-width: 50px;
  }
}



// RESPONSIVE

@media (max-width: 1450px) {

   .social-image {                        
          img {
            width: 30px;
        }  
    }


     .social-text {
      
      p {
        font-size: 18px;
      }

      h4 {
        font-size: 22px;
      }
    }
}

@media (max-width: 1400px) {
  
  .social-text {
    p {
      font-size: 16px;
    } 
  }
}

@media (max-width: 1200px) {
  
  button {
    padding: 10px 20px 10px 20px;
  }
}


@media (max-width: 1100px) {
  
  .social-text {
    p {
      font-size: 14px;
    }
  }
}


@media (max-width: 1050px) {
  
  .social-text {
    p {
      display: none;
    }
  }
}

@media (max-width: 900px) {
   
   button {
      width: 240px;
    }

    .social-text {
       p {
          display: block;
      }
  }
}

@media (max-width: 550px) {
   button {
      width: max-content;
  }
}

@media (max-width: 450px) { 
    button {
      padding: 10px 15px 10px 15px;
    }

    .social-image {
      padding-right: 10px;
    }

    .social-text {
      h4 {
        font-size: 18px;  
    }
  }

}


@media (max-width: 400px) {
     button {
        width: 220px;
      }
}




</style>
