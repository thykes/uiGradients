<template>
  <main id="app">
    <Topbar />
    <Actionbar
      :gradient="currentGradient"
      :palette="showingPalette"
      :showGradientModal="showGradientModal"
      :closeModals="closeModals"
      @togglePalette="togglePalette"
      />
    <List :gradients="gradients" :palette="showingPalette" @updateGradient="updateGradient" />
    <Display :gradient="currentGradient"  @updatedIndex="updateIndex" @togglePalette="togglePalette" />
    <GradientModal :show="showingGradientModal" :closeModals="closeModals"/>
  </main>
</template>

<script>
import axios from 'axios';

import Topbar from './components/Topbar';
import Actionbar from './components/Actionbar';
import Display from './components/Display';
import List from './components/List';
import GradientModal from './components/GradientModal';

export default {
  name: 'app',
  data() {
    return {
      index: {},
      currentGradient: {},
      gradients: [],
      showingPalette: false,
      showingGradientModal: false,
    };
  },
  components: {
    Topbar,
    Display,
    Actionbar,
    List,
    GradientModal,
  },
  methods: {
    showGradientModal() {
      this.showingGradientModal = true;
    },
    closeModals() {
      this.showingGradientModal = false;
    },
    updateGradient(name) {
      const id = this.gradients.findIndex(gradient => gradient.name.replace(/\s/g, '') === name.replace(/\s/g, ''));
      this.index = id;
      if (this.showingPalette) this.showingPalette = false;
    },
    togglePalette() {
      this.showingPalette = !this.showingPalette;
    },
    updateIndex(direction) {
      if (direction === 'up') {
        const updatedIndex = this.index + 1;
        this.index = (updatedIndex >= this.gradients.length - 1) ? 0 : updatedIndex;
      } else if (direction === 'down') {
        const updatedIndex = this.index - 1;
        this.index = (updatedIndex <= 0) ? this.gradients.length - 1 : updatedIndex;
      }
      this.showingPalette = false;
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
          this.updateGradient(gradientName);
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
  },
  mounted() {
    this.boot();
  },
};
</script>
