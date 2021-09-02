<template>
<section class="animation">

<svg id="motionPath" xmlns="http://www.w3.org/2000/svg" width="887.609" height="1770.298" viewBox="0 0 887.609 1770.298">
      
        <g class="party-pin">
      <path 
          id="path" 
          data-name="path" 
          d="M17363.316,4734.214s654.816,173.787,777.666,368.78,158.115,426.864-17.057,531.5-719.121,133.913-760.609,355.181,745.4,510.069,745.4,510.069" 
          transform="translate(-17359.217 -4731.797)" 
          fill="none" 
          stroke="#707070" 
          stroke-width="5"/>
        </g>
  </svg>

    <div class="party-pin" id="party-pin" >
          <img src="@/assets/svg/category-pins/party-pin.svg" alt="" />
    </div>
</section>
    
</template>

<script>
    import { gsap } from "gsap";
    import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin' 
  //  import { MotionPathHelper } from 'gsap/dist/MotionPathHelper'

export default {

   mounted: function() {
      this.startAnimations()
    },

     methods: {
      startAnimations() {
        
        gsap.registerPlugin(MotionPathPlugin);
      //   gsap.registerPlugin(MotionPatHelper);

        gsap.set(".party-pin", {scale: 0.5, autoAlpha: 1});
        gsap.to("#party-pin", {
        motionPath: {
        path: "#path",
        align: "#path",
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        duration: 5,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
       },
        duration: 5,
        ease: "power1.inOut"
      });
      //  MotionPathHelper.create(".party-pin");

      }
    }

}
</script>

<style lang="scss" scoped>
    .party-pin {
        width: 200px;
    }

</style>