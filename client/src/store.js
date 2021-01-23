import Vue from 'vue'
import Vuex from 'vuex'
import ClientConfig from './chronolawgic-client-config.json'
import axios from "axios";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        placeholder: 9,
        authentication: {
            "name": "test user", // what is their name?
            "token": false, // What is their server authentication token?
            "admin_users": false, // Can this user administer users?
            "can_create": false, // Can this user create new timelines?
            "timelines": [] // What timelines can this user edit?
        },
        available_timelines: [
            //TODO: store a list of timeline titles/ids available on the server
        ],
        timeline: {
            //TODO: timeline structure
        },
        updated_timeline: {
            //TODO: updated timeline structure to store edits
        }
    },
    mutations: {
        writeTimeline(state) {
            //TODO: Do any data transformations necessary
            //TODO: Check credentials
            //TODO: Send updated timeline to server
            state.placeholder = 9;
        },
        createTimeline(state) {
            //TODO: Check credentials
            //TODO: Get new timeline ID from server
            state.placeholder = 9;
        },
        deleteTimeline(state) {
            //TODO: Do any data transformations necessary
            state.placeholder = 9;
        },
        setTimeline(state, from_server) {
            //TODO: Do any data transformations necessary
            state.timeline = from_server;
        }
    },
    getters: {
        readTimeline(state) {
            state.placeholder++
        },
    },
    actions: {
        authenticate(credentials=false) {
            console.log("authenticating with :")
            console.log(credentials)
            return false
        },
        getTimeLine: function ({commit}) {
            //TODO make this work with vue router so it gets the new timeine as the route changes
            axios
                .get(ClientConfig.server_url)
                .then(response => response.data)
                .then(timeline => {
                    console.log(timeline);
                    commit('setTimeline', timeline)
                })
        }
    },
})
export default store;