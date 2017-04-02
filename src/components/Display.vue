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

    <div class="display__footer">
      <p class="display__byline noselect">
        For the people by the <a href="https://github.com/ghosh/uiGradients/graphs/contributors" target="_blank">people</a>. Maintained by <a href="https://twitter.com/_ighosh" target="_blank">@_ighosh</a>
      </p>
    </div>

  </main>
</template>

<script>
import LeftArrow from '../assets/leftchev.svg';
import RightArrow from '../assets/rightchev.svg';

export default {
  name: 'display',
  props: ['gradient', 'direction', 'closeModals', 'updateDirection', 'showModal'],
  components: {
    LeftArrow, RightArrow,
  },
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors].join(', ');
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
    togglePalette() {
      this.$emit('togglePalette');
    },
    closePalette() {
      this.$emit('closePalette');
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
        case 16: // shift
          event.preventDefault();
          this.closeModals();
          this.togglePalette();
          break;
        case 13: // enter
          this.closeModals();
          this.showModal('code');
          break;
        case 32: // space
          this.closeModals();
          this.showModal('gradient');
          break;
        case 27: // escape
          event.preventDefault();
          this.closePalette();
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
