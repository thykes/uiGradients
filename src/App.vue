<template>
  <main id="app">
    <Topbar />
    <Actionbar :gradient="currentGradient" />
    <Display :gradient="currentGradient" />
  </main>
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
        if (window.location.hash) {
          const gradientName = window.location.hash.substring(1);
          const id = this.gradients.findIndex(gradient => gradient.name.replace(/\s/g, '') === gradientName);
          this.currentGradient = this.gradients[id];
        } else {
          this.currentGradient = this.gradients[Math.floor(Math.random() * this.gradients.length)];
          window.location.hash = this.currentGradient.name.replace(/\s/g, '');
        }
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
