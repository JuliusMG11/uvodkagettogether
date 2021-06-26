<template>
  <div class="home">
    <section-hero />

    <section-one />

    <section-two />

    <section-three />

    <section-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import sectionHero from '@/components/homePage/sectionHero.vue'
import sectionOne from '@/components/homePage/sectionOne.vue'
import sectionTwo from '@/components/homePage/sectionTwo.vue'
import sectionThree from '@/components/homePage/sectionThree.vue'
import sectionFooter from '@/components/homePage/sectionFooter.vue'

export default {
  name: 'Home',
  components: {
    sectionHero,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFooter,
  },
}
</script>
