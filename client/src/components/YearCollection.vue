<template>
  <div class="year-container">
    <event-card class="events-container" :event="$parent.timeline.events[id]" :key="id" v-for="id in event_ids"/>
    <div class="vertical-line"></div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";

export default {
  name: "YearCollection",
  components: {EventCard},
  props: ['event_ids']

}
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 3em;
  display: grid;
  grid-template-areas: "event-container line";
}
.vertical-line {
  height: 4em;
  border-left: 1px solid $color-black;
}



</style>