<template>
  <div class="container">
    <mini-map class="mini-map"></mini-map>
    <div class="timeline">
      <h1>{{ timeline.title }}</h1>
      <div class="events-container">
        <div v-for="event in timeline.events" :key="event.id">
          <event-card :event="event"></event-card>
        </div>
      </div>
    </div>
    <details-sidebar class="details-sidebar"></details-sidebar>
  </div>
</template>

<script>

import EventCard from "@/components/EventCard";
import MiniMap from "@/components/MiniMap";
import DetailsSidebar from "@/components/DetailsSidebar";

export default {
  name: 'ViewTimeline',
  components: {EventCard, MiniMap, DetailsSidebar},
  computed: {
    timeline() {
      return this.$store.state.timeline
    },
  },
  mounted() {
    this.$store.dispatch('getTimeLine')
    // this.events = this.$store.getters.getEvents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: inline-grid;
  width: 100%;
  height: 100vh;
}

.mini-map {
  grid-area: 1 / 1 / last-line / 3;
  background-color: orange;
}

.timeline {
  grid-area: 1 / 3 / last-line / 9;
  background-color: hotpink;
}

.details-sidebar {
  grid-area: 1 / 9 / last-line / 12;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
