<template>
  <v-container id="my-skills">
    <h1>Skills</h1>
    <v-layout wrap align-center>
      <v-flex  text-xs-center xs6 sm3 v-for="(skill,index) in skills" :key="index">
        <my-skill class="my-skill" :skill="skill" :skillActivated="skill.activated"></my-skill>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MySkill from '@/components/MySkill'
import Skill from '@/classes/Skill'
export default {
  name: 'MyLifeEvent',
  components: {
    'my-skill': MySkill
  },
  data () {
    return {
      skills: [
        new Skill('Javascript', 91, 'yellow'),
        new Skill('HTML 5', 90, '#F16529'),
        new Skill('CSS 3', 80, '#34A3DB'),
        new Skill('Bootstrap', 90, '#8252CE'),
        new Skill('PHP', 60, '#777BB2'),
        new Skill('AngularJs', 69, '#D71D33'),
        new Skill('Wordpress', 69, '#1A6E94'),
        new Skill('Vue', 55, '#4FC08D'),
        new Skill('NodeJs', 60, '#76AD5F'),
        new Skill('MongoDB', 55, '#49A347'),
        new Skill('MySQL', 55, '#F7F7F7')
      ]
    }
  },
  props: {
    event: Object
  }
}
</script>
<style scoped>
   .container >>> .my-skill{
    margin:30px 0px;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin-bottom:20px;
  }
</style>
