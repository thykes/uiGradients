<template>
  <main class="display" :style="background">

    <div class="display__gradientname">
      <p>Aquatic Blue</p>
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
  components: {
    LeftArrow, RightArrow,
  },
  data() {
    return {
      background: {
        /* eslint-disable no-dupe-keys */
        background: '#FF4E50',
        background: 'linear-gradient(to left, #FF4E50 , #F9D423)',
      },
    };
  },
};
</script>
