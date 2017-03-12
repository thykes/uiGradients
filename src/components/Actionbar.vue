<template>
  <section class="actionbar">
    <div class="actionbar__section">
        <a href="#" class="burger menu" id="js-burger-menu">
            <span class="menu__icon"></span>
            Show all gradients
        </a>
    </div>

    <div class="actionbar__section tac">
      <template v-for="(color, index) in colors">
        <Swatch :color="color" :class="{'last' : index === (colors.length - 1)}" />
      </template>
    </div>

    <div class="actionbar__section tar">
      <a href="#" class="trigger">
        <Brackets class="trigger__icon" /> Get CSS code
      </a>
      <a href="#" class="trigger">
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
  props: ['gradient'],
  components: {
    Add, Brackets, Swatch,
  },
  computed: {
    colors() {
      return this.gradient.colors;
    },
  },
};
</script>
