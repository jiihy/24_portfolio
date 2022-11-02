<template>
  <!-- spot_bg_area -->
    <div class="container">
    <div class="inner-container">
        <div class="shape">
            <div class="title">
                <h1>Atomic floating shapes.</h1> 
                <a class="button" href="#">Freeze shapes</a>
          </div>
        </div>
    </div>
  </div>
    <!-- //spot_bg_area -->
</template>

<script>
// spot_bg script 

export default {
  name: 'App','spot_bg',
  data(){
    return {
      
    }
  },
  components: {
    spot_bg : spot_bg,
  }
}
</script>




<style lang="scss">
  @import "./assets/scss/App.scss";
</style>
``