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
        <Swatch :color="color" :class="{'last' : index === (gradient.colors.length - 1)}" :key="{index}"/>
      </template>
    </div>

    <div class="actionbar__section tar">
      <ul class="actionbar__nav">
        <li class="actionbar__nav-item">
          <a href="#" class="actionbar__nav-link" @click.prevent="changeDirection()">
            <Rotate class="actionbar__nav-icon actionbar__nav-icon--rotate" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a href="#" class="actionbar__nav-link" @click.prevent="openModal('code')">
            <Brackets class="actionbar__nav-icon actionbar__nav-icon--code" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a href="#" class="actionbar__nav-link" @click.prevent="openModal('gradient')">
            <Add class="actionbar__nav-icon actionbar__nav-icon--add" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a href="#" class="actionbar__nav-link">
            <Help class="actionbar__nav-icon actionbar__nav-icon--help" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
import Swatch from './Swatch';

import Add from '../assets/add.svg';
import Brackets from '../assets/code.svg';
import Rotate from '../assets/direction.svg';
import Help from '../assets/help.svg';

export default {
  name: 'actionbar',
  props: ['gradient', 'palette', 'showModal', 'updateDirection'],
  components: {
    Rotate, Add, Brackets, Swatch, Help,
  },
  methods: {
    togglePalette() {
      this.$emit('togglePalette');
    },
    openModal(type) {
      this.showModal(type);
    },
    changeDirection() {
      this.updateDirection('up');
    },
  },
};
</script>
