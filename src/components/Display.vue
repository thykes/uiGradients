<template>
  <main class="display" :style="backgroundStyle">
    <div class="display__gradientname">
      <p class="noselect">{{gradient.name}}</p>
    </div>

    <ul class="nav" id="nav">
      <li class="nav__item" id="nav--prev" @click.prevent="updateIndex('down')">
        <a href="#"><LeftArrow class="nav__arrow nav__arrow--left"/></a>
      </li>
      <li class="nav__item" id="nav--next" @click.prevent="updateIndex('up')">
        <a href="#"><RightArrow class="nav__arrow nav__arrow--right"/></a>
      </li>
    </ul>

  </main>
</template>

<script>
import LeftArrow from '../assets/leftchev.svg';
import RightArrow from '../assets/rightchev.svg';

export default {
  name: 'display',
  props: ['gradient', 'direction', 'closeModals', 'updateDirection'],
  components: {
    LeftArrow, RightArrow,
  },
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors].reverse().join(', ');
      const direction = this.direction;
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
  },
  methods: {
    updateIndex(dir) {
      this.$emit('updatedIndex', dir);
    },
    // updateDirection(dir) {
    //   this.$emit('updatedDirection', dir);
    // },
    togglePalette() {
      this.$emit('togglePalette');
    },
    handleKeyboardEvents(event) {
      switch (event.which) {
        case 37: // left
          this.updateIndex('down');
          break;
        case 39: // right
          this.updateIndex('up');
          break;
        case 38: // up
          this.updateDirection('up');
          break;
        case 40: // down
          this.updateDirection('down');
          break;
        // case 16:
        case 32: // shift
          event.preventDefault();
          this.togglePalette();
          break;
        case 27: // escape
          event.preventDefault();
          this.closeModals();
          break;
        default:
      }
    },
  },
  created() {
    window.addEventListener('keyup', this.handleKeyboardEvents);
  },
};
</script>
