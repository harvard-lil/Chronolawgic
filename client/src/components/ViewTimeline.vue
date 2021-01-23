<template>
  <div class="hell">
    <h1>{{ $store.state.placeholder }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ViewTimeline',
  computed: {
    test() {
      return this.$store.state.placeholder
    }
  },
  mounted () {
    this.$store.dispatch('getTimeLine')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
