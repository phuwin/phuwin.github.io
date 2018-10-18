<template>
  <v-container fluid white id="my-quote">
    <v-container>
      <v-layout row align-center>
        <v-flex sm12 md6 offset-md4 text-xs-right>
          <div data-aos="fade" data-aos-duration="2000">
            <i>"Clean code is love,<br> clean code is life"</i>
            <br>
            <b>- Phu</b>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
  export default {
    name: 'MyQuote'
  }
</script>
<style scoped>
  #my-quote >>> .row {
    height: 300px;
  }
  #my-quote >>> i {
    font-size:40px;
  }
  @media screen and (max-width :470px){
    #my-quote >>> i {
      font-size: 7vw;
    }
  }
</style>

