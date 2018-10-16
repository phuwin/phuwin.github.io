<template>
  <v-app dark>
    <my-header :iconSrc="iconSrc" :title="pageTitle" :iconAlt="pageTitle"></my-header>
    <my-hero :backgroundSrc="heroSrc" :title="heroTitle" :texts="heroText"></my-hero>
    <my-life></my-life>
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

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import logo from '@/assets/logo.png'
import hero from '@/assets/hero.jpeg'
import MyLife from '@/components/MyLife.vue'
export default {
  name: 'app',
  components: {
    'my-header': Header,
    'my-hero': Hero,
    'my-life': MyLife
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
      heroSrc: hero,
      iconSrc: logo
    }
  },
  created () {
    AOS.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:64px;
}
</style>
