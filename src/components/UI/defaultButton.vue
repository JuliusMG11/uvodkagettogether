<template>
  <button class="btn-hover color-1" href="#">
    <div class="social-text">
      <h4>{{ title }}</h4>
      <a :href="`mailto:${mailLink}`">{{ mailLink }}</a>
      <a :href="`tel:${phoneLink}`">{{ phoneLink }}</a>
    </div>
  </button>
</template>

<script>
export default {
  props: ['title', 'mailLink', 'phoneLink'],
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
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border: none;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
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

  a {
    font-weight: 800;
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
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
</style>
