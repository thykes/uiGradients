<template>
  <div id="app">
    <Topbar />
    <Actionbar :gradient="currentGradient" />
    <Display />
  </div>
</template>

<script>
import axios from 'axios';

import Topbar from './components/Topbar';
import Actionbar from './components/Actionbar';
import Display from './components/Display';

export default {
  name: 'app',
  data() {
    return {
      currentGradient: {},
      gradients: [],
    };
  },
  components: {
    Topbar,
    Display,
    Actionbar,
  },
  methods: {
    fetchGradients() {
      const route = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/build/gradients.json';
      axios.get(route).then((response) => {
        this.gradients = response.data;
        this.$emit('gradients-loaded');
      });
      // .catch((error) => {
      //   console.log(error);
      // });
    },
    setCurrentGradient() {
      this.$on('gradients-loaded', () => {
        this.currentGradient = this.gradients[Math.floor(Math.random() * this.gradients.length)];
      });
    },
    boot() {
      this.fetchGradients();
      this.setCurrentGradient();
    },
  },
  mounted() {
    this.boot();
  },
};
</script>
