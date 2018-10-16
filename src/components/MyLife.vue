<template>
  <v-container fluid white id="my-events">
    <v-container>
      <div data-aos="fade" data-aos-duration="2000">
        <v-layout v-for="(event,index) in myEvents.slice().reverse()" :key="index" row>
            <v-flex xs12 md6 class="life-event-container" :class= "[(index%2===1)? 'right' : '']">
              <my-life-event :event = "event"></my-life-event>
            </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-container>
</template>
<script>
import LifeEvent from '@/classes/LifeEvent'
import MyLifeEvent from '@/components/MyLifeEvent'
export default {
  name: 'MyLife',
  props: [],
  components: {
    'my-life-event': MyLifeEvent
  },
  data () {
    return {
      myEvents: [
        new LifeEvent('Born', '', '13th August, 1995', 'Hai Phong, Vietnam'),
        new LifeEvent('Moved to Saigon', '', '1998', ''),
        new LifeEvent('Studied abroad', 'University of Applied Sciences', '2013', 'Lahti, Finland'),
        new LifeEvent('Graduated', 'Average of 4.25', 'December 2016', 'Lahti University of Applied Sciences'),
        new LifeEvent('Software Developer', 'Making websites and mobile applications', 'August 2015', 'SuperApp Oy', 'present')
      ]
    }
  }
}
</script>
<style scoped>

@media (min-width: 960px) {
  .right {
    margin-left:50%;
  }
}
.life-event-container {
  padding:10px;
  text-align:right;
}
.white {
  color:black;
}
.right {
  text-align: left;
}


</style>

