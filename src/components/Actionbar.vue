<template>
  <section class="actionbar">
    <div class="actionbar__section">
        <a href="#" :class="{ 'burger': true, 'menu': true , 'is-active': palette}" @click.prevent="togglePalette()">
            <span class="menu__icon"></span>
            Show all gradients
        </a>
    </div>

    <div class="actionbar__section tac">
      <template v-for="(color, index) in gradient.colors">
        <Swatch :color="color" :class="{'last' : index === (gradient.colors.length - 1)}" />
      </template>
    </div>

    <div class="actionbar__section tar">
      <a href="#" class="trigger noselect">
        <Brackets class="trigger__icon" /> Get CSS code
      </a>
      <a href="#" class="trigger noselect">
        <Add class="trigger__icon" /> Add Gradient
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
  props: ['gradient', 'palette'],
  components: {
    Add, Brackets, Swatch,
  },
  methods: {
    togglePalette() {
      this.$emit('togglePalette');
    },
  },
};
</script>
