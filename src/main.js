// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';

require('./stylesheets/app.scss');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    gradients: [],
  },
  methods: {
    fetchGradients() {
      const route = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/build/gradients.json';
      axios.get(route).then((response) => {
        this.gradients = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  mounted() {
    this.fetchGradients();
  },
});
