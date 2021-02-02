<template>
  <div class="full-container">
    <mini-map id="mini-map"/>
    <div id="timeline">
      <h1>{{ timeline.title }}</h1>
      <div class="events-container">
        <year-collection class="event-container" v-for="(events, year) in timeline.years" :key="year" :event_ids="events" ></year-collection>
      </div>
    </div>
    <details-sidebar id="details-sidebar"/>
  </div>
</template>

<script>

import YearCollection from "@/components/YearCollection";
import MiniMap from "@/components/MiniMap";
import DetailsSidebar from "@/components/DetailsSidebar";

export default {
  name: 'ViewTimeline',
  components: {YearCollection, MiniMap, DetailsSidebar},
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
.full-container {
  display: grid;
  grid-template-columns: 1fr 66% 1fr;
  height: 100vh;
  grid-template-areas: "mini-map timeline sidebar";
}

#mini-map {
  border-right: 1px solid $color-black;
}

#timeline {
  border-right: 1px solid $color-black;
}

#details-sidebar {
}
.events-container {
  margin-bottom: 1em;
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
