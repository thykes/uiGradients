<template>
  <div :class="{ 'active': palette, 'palette': true }">

    <ul class="shortlist">
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:salmon;">
        <a href="#" class="shortlist__link"></a>
      </li>
    </ul>

    <ul class="palette__list">

      <li class="palette__item" v-for="gradient in classifiedColors">
        <Palette
          :gradient="gradient"
          :direction="direction"
          @updateGradient="updateGradient" />
      </li>

    </ul>
  </div>
</template>

<script>
import Palette from './Palette';
import detect from '../services/colorDetector';

export default {
  name: 'list',
  props: ['gradients', 'palette', 'direction'],
  components: {
    Palette,
  },
  methods: {
    updateGradient(name) {
      this.$emit('updateGradient', name);
    },
  },
  computed: {
    // Identitifies a color range for each color in gradient
    classifiedColors() {
      const gradients = this.gradients;
      gradients.forEach((gradient) => {
        const tags = [];
        gradient.colors.forEach(color => tags.push(detect(color)));
        /* eslint-disable no-param-reassign */
        gradient.palletes = tags;
      });
      return gradients;
    },
  },
};
</script>
