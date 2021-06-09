<template>

    <button class="btn-hover color-1" href="#">

        <div class="social-image">
            <img src="@/assets/svg/google-play.svg" alt="">
        </div>

        <div class="social-text">
            <p>Get it on</p>
            <h4>Google play</h4>
        </div>

</button>
  
</template>

<script>
export default {

}
</script>

<style>
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
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
            border: none;
        }

        .btn-hover:hover {
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
        }

        .btn-hover:focus {
            outline: none;
        }

        .btn-hover.color-1 {
            background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
            box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
        }


</style>