<template>
  <div class="event-container">
    <h1 class="card-title">{{ event.title }}</h1>
    <div class="card-description">{{ event.description }}</div>
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
  border: 1px solid #2e2e2e;
  background-color: white;
  width: 400px;
  height: 100px;
  display: grid;
}
</style>