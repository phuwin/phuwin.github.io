<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon >
      <img :src='iconSrc' :alt="iconAlt" height="25">
    </v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String,
    iconSrc: String,
    iconAlt: String
  }
}
</script>
<style >
</style>

