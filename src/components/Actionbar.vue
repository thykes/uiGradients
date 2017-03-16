<template>
  <section class="actionbar">
    <div class="actionbar__section">
        <a href="#" :class="{ 'burger': true, 'menu': true , 'is-active': palette}" @click.prevent="togglePalette()">
            <span class="menu__icon"></span>
            Show all gradients
        </a>
    </div>

    <div class="actionbar__section actionbar__section--swatch tac">
      <template v-for="(color, index) in gradient.colors">
        <Swatch :color="color" :class="{'last' : index === (gradient.colors.length - 1)}" />
      </template>
    </div>

    <div class="actionbar__section tar">
      <a href="#" class="trigger noselect">
        Get CSS code
      </a>
      <a href="#" class="trigger noselect" @click.prevent="showAddGradientModal()">
        Add Gradient
      </a>
    </div>
  </section>
</template>


<script>
import Swatch from './Swatch';

import Add from '../assets/add.svg';
import Brackets from '../assets/code.svg';

export default {
  name: 'actionbar',
  props: ['gradient', 'palette', 'showGradientModal', 'closeModals'],
  components: {
    Add, Brackets, Swatch,
  },
  methods: {
    togglePalette() {
      this.$emit('togglePalette');
    },
    showAddGradientModal() {
      this.showGradientModal();
    },
  },
};
</script>
