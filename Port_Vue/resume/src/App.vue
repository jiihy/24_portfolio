<template>
  <!-- spot_bg_area -->
    <section class="wrapper">
      <div class="blur"></div>
      <div class="blur"></div>
      <div class="blur"></div>
      <h2>sie-log</h2>
      <p>for the eternal grow</p>    
    </section>
    <!-- //spot_bg_area -->
</template>

<script>
// spot_bg script 
const script = document.createElement("script");
script.src="../src/assets/js/bg_script.js"
document.body.appendChild(script);

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components: {

  }
}

</script>




<style lang="scss">
  @import "./assets/scss/App.scss";
</style>
``