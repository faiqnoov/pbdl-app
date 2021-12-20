import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);

// import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
