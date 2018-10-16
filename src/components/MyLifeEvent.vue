<template>
  <div>
      <div>
        <b>{{event.time}} </b>
        <b v-if="event.endTime">- {{event.endTime}}</b>
      </div>
      <div>
        {{event.title}}
      </div>
      <div>
        {{event.text}}
      </div>
      <div>
        {{event.place}}
      </div>
  </div>
</template>
<script>
export default {
  name: 'MyLifeEvent',
  props: {
    event: Object
  }
}
</script>
