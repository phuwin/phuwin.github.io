<template>

</template>
<script>
import moment from 'moment'
import LifeEvent from '@/classes/LifeEvent'
export default {
  name: 'MyLife',
  props: [],
  components: {},
  data () {
    return {
      myEvents: [
        new LifeEvent('Born', '', moment('1995-08-13').toDate(), 'Hai Phong, Vietnam'),
        new LifeEvent('Moved', 'Moved to Saigon', moment('1997-12-31').toDate(), ''),
        new LifeEvent('Studied abroad', 'Europe', moment('2013-09-01').toDate(), 'Hai Phong, Vietnam'),
        new LifeEvent('Graduated', 'Average of 4.25', moment('2016-12-20').toDate(), 'Lahti University of Applied Sciences, Finland'),
        new LifeEvent('Software Developer', 'Making websites and mobile applications', moment('2015-09-01').toDate(), -1)
      ]
    }
  },
  mounted () {
    console.log(this.$data.myEvents)
  },
  methods: {}
}
</script>
<style scoped>

</style>

