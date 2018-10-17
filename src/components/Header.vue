<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon >
      <img :src='iconSrc' :alt="iconAlt" height="25">
    </v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn @click="$vuetify.goTo('#my-events',options)" flat>My Events</v-btn>
      <v-btn @click="$vuetify.goTo('#my-skills',options)" flat>My Skills</v-btn>
      <v-btn @click="$vuetify.goTo('#contact-form',options)" flat>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String,
    iconSrc: String,
    iconAlt: String
  },
  data () {
    return {
      options: {
        offset: -50,
        duration: 1000
      }
    }
  }
}
</script>
<style >
</style>

