<template>
  <v-app dark>
    <my-header :iconSrc="iconSrc" :title="pageTitle" :iconAlt="pageTitle"></my-header>
    <my-hero :title="heroTitle" :texts="heroText"></my-hero>
    <my-life></my-life>
    <my-skills></my-skills>
    <my-quote></my-quote>
    <v-footer class="pa-3 text-xs-center" align-center>
      <v-layout align-center justify-center>
        {{pageTitle}} &copy; {{ new Date().getFullYear() }}
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import logo from '@/assets/logo.png'
import MyLife from '@/components/MyLife'
import MySkills from '@/components/MySkills'
import MyQuote from '@/components/MyQuote'
import ContactForm from '@/components/ContactForm'
export default {
  name: 'app',
  components: {
    'my-header': Header,
    'my-hero': Hero,
    MyLife,
    MySkills,
    MyQuote,
    ContactForm
  },
  data () {
    return {
      pageTitle: 'phuwin',
      heroTitle: 'phuwin',
      heroText: [
        'Hi',
        'I am Phu.',
        'I make webs and mobile apps.'
      ],
      iconSrc: logo
    }
  },
  created () {
    AOS.init({once: 1})
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=K2D:400,400i,700');
#app {
  font-family: 'K2D', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:64px;
  font-size:20px;
}
@media screen and (max-width:959px) {
  #app {
    margin-top:48px;
    font-size:15px;
  }
}
.white {
  color:black !important;
}
</style>
