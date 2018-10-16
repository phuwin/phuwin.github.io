<template>
  <v-progress-circular :rotate="90" :size="120" :width="20" :value="value" :color="skill.color">
    {{ skill.title }}
  </v-progress-circular>
</template>
<script>
export default {
  name: 'MySkill',
  data () {
    return {
      value: 0
    }
  },
  props: {
    skill: Object
  },
  watch: {
    actived: (val) => {
      console.log(val)
      this.activate()
    }
  },
  created () {
    this.activate()
  },
  methods: {
    activate () {
      this.$data.value = this.$props.skill.percentage
    }
  }
}
</script>
