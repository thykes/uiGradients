<template>
  <main id="app">
    <Topbar />
    <Actionbar :gradient="currentGradient" />
    <Display :gradient="currentGradient" :gradientStyle="gradientStyle" @updatedIndex="updateIndex" />
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
      index: {},
      currentGradient: {},
      gradients: [],
      gradientStyle: {
        gradient: null,
        color: null,
      },
    };
  },
  components: {
    Topbar,
    Display,
    Actionbar,
  },
  methods: {
    updateIndex(direction) {
      if (direction === 'up') {
        const updatedIndex = this.index + 1;
        this.index = (updatedIndex >= this.gradients.length - 1) ? 0 : updatedIndex;
      } else if (direction === 'down') {
        const updatedIndex = this.index - 1;
        this.index = (updatedIndex <= 0) ? this.gradients.length - 1 : updatedIndex;
      }
    },
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
          this.index = id;
          this.currentGradient = this.gradients[id];
        } else {
          const randomId = Math.floor(Math.random() * this.gradients.length);
          this.index = randomId;
          this.currentGradient = this.gradients[randomId];
          window.location.hash = this.currentGradient.name.replace(/\s/g, '');
        }
        this.$emit('current-gradient-set');
      });
    },
    setGradientString() {
      this.$on('current-gradient-set', () => {
        this.gradientStyle.gradient = ['to right', ...this.currentGradient.colors].join();
        this.gradientStyle.color = this.currentGradient.colors[0];
      });
    },
    boot() {
      this.fetchGradients();
      this.setCurrentGradient();
      this.setGradientString();
    },
  },
  mounted() {
    this.boot();
  },
};
</script>
