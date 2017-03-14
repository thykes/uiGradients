<template>
  <main id="app">
    <Topbar />
    <Actionbar :gradient="currentGradient" />
    <List :gradients="gradients" />
    <Display :gradient="currentGradient"  @updatedIndex="updateIndex" />
  </main>
</template>

<script>
import axios from 'axios';

import Topbar from './components/Topbar';
import Actionbar from './components/Actionbar';
import Display from './components/Display';
import List from './components/List';

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
    List,
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
        } else {
          const randomId = Math.floor(Math.random() * this.gradients.length);
          this.index = randomId;
        }
      });
    },
    boot() {
      this.fetchGradients();
      this.setCurrentGradient();
    },
  },
  watch: {
    index(val) {
      this.currentGradient = this.gradients[val];
      window.location.hash = this.currentGradient.name.replace(/\s/g, '');
    },
    currentGradient(val) {
      this.gradientStyle.gradient = ['to right', ...val.colors].join();
      this.gradientStyle.color = this.currentGradient.colors[0];
    },
  },
  mounted() {
    this.boot();
  },
};
</script>
