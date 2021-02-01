<template>
  <div id="app">
    <header></header>
    <ViewTimeline/>
    <footer></footer>
  </div>
</template>

<script>
import ViewTimeline from './components/ViewTimeline.vue'

export default {
  name: 'App',
  components: {
    ViewTimeline
  }
}
</script>

<style lang="scss">
$color-white: white;
$color-black: #2e2e2e;

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--
Proposed Timeline Structure

    {
        "id": (auto gen),
        "title": "Timeline Title",
        "created_by": "Editable Text", (user accts are for auth/logging purposes)
        "categories": {
            "Case": { id: "1", "color": "#FF9911" },
            "Legislation": {  id: "2", "color": "#99FF11" },
            "Executive Order": {  id: "3" "color": "#FF9988" },
            "Anarchism": {  id: "4", "color": "#11FF99" },
            "Police": {  id: "5", "color": "#8899FF" },
            "Fascism": {  id: "6", "color": "#1199FF" },
        },
        "events": [
            {
                "title": "Cap",
                "categories": [ 1, 3 ],
                "cap_link": "https://cite.case.law/ill/1/176/",
                "link": false,
                "text": "blah blah blah",
                "thumb": (base64 encoded image),
                // What else do we need? Disposition? Collapsed/Visible? Hidden? Draft? Author?
            }
        ],
        "app_meta": { // DOESN'T GET EXPORTED — implementation specific
            "acl": [:user_id, :user_id, user_id],
            "created_by": user_id,
            "is_draft": bool,
            "is_hidden": bool,
        },
    }
 -->