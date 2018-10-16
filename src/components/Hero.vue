<template>
  <v-content id="hero">
    <v-parallax height="200" >
      <v-layout column align-center justify-center class="white--text">
        <section>
          <vue-typer :text='texts' erase-style='backspace' :erase-delay='50'></vue-typer>
        </section>
      </v-layout>
    </v-parallax>
  </v-content>
</template>
<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'Header',
  props: {
    title: String,
    backgroundSrc: String,
    texts: Array
  },
  components: {VueTyper}
}
</script>
<style scoped>
  .vue-typer >>> *{
    color:white ;
    font-size:50px;
  }
  .vue-typer >>> .caret {
    background-color:white;
  }
</style>

