<template>
  <div class="event-container">
    <div class="event-card">
      <h3 class="card-title">{{ event.title }}</h3>
      <div class="card-description">{{ event.description }}</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: [
    'event'
  ]
}
</script>

<style scoped lang="scss">

.event-container {
  display: grid;
  grid-template-areas: "event-card line";
}
.line {
  border-bottom: 1px solid black;
  width: 50px;
  height: 40px;
}
.event-card {
  border: 1px solid $color-black;
  background-color: $color-white;
  //width: 400px;
  height: 100px;
  display: grid;
  text-align: left;
  margin-bottom: 1em;
}

.card-title {
  padding: 1em;
  grid-area: 1 / 1 / last-line / 3;
  border-right: 1px solid black;
}

.card-description {
  grid-area: 1 / 3 / last-line / 12;
  overflow-y: scroll;
  font-size: 0.8em;
  padding: 1em;
}
</style>