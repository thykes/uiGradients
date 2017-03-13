<template>
  <main class="display" :style="backgroundStyle">

    <div class="display__gradientname">
      <p>{{gradient.name}}</p>
    </div>

    <ul class="nav" id="nav">
      <li class="nav__item" id="nav--prev"><LeftArrow class="nav__arrow nav__arrow--left"/></li>
      <li class="nav__item" id="nav--next"><RightArrow class="nav__arrow nav__arrow--right"/></li>
    </ul>

  </main>
</template>

<script>
import LeftArrow from '../assets/leftchev.svg';
import RightArrow from '../assets/rightchev.svg';

export default {
  name: 'display',
  props: ['gradient', 'gradientStyle'],
  components: {
    LeftArrow, RightArrow,
  },
  computed: {
    backgroundStyle() {
      return {
        /* eslint-disable no-dupe-keys */
        background: `${this.gradientStyle.color}`,
        background: `linear-gradient(${this.gradientStyle.gradient})`,
      };
    },
  },
};
</script>
