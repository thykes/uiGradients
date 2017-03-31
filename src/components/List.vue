<template>
  <div :class="{ 'active': palette, 'palette': true }">

    <ul class="shortlist">
      <template v-for="item in shortlists">
        <li class="shortlist__item" :style="`backgroundColor: ${item.color}`" @click="filterGradients(item.name)" :class="{ active: isActiveShortlist(item.name)}">
          <a href="#" class="shortlist__link" v-if="currentFilter === item.name" @click.prevent.stop="clearFilter()">
            clear
          </a>
        </li>
      </template>
<!--       <li class="shortlist__item" style="background-color:red;" @click="filterGradients('reds')" :class="{ active: isActiveShortlist('reds')}">
        <a href="#" class="shortlist__link" v-if="currentFilter === 'reds'" @click.prevent.stop="clearFilter()">
          clear
        </a>
      </li>
      <li class="shortlist__item" style="background-color:#ffd200;" @click="filterGradients('yellows')" :class="{ active: isActiveShortlist('yellows')}">
        <a href="#" class="shortlist__link" v-if="currentFilter === 'reds'" @click.prevent.stop="clearFilter()">
          clear
        </a>
      </li>
      <li class="shortlist__item" style="background-color:#159957;" @click="filterGradients('greens')" :class="{ active: isActiveShortlist('greens')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#1cb5e0;" @click="filterGradients('cyans')" :class="{ active: isActiveShortlist('cyans')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#155799;" @click="filterGradients('blues')" :class="{ active: isActiveShortlist('blues')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#ef32d9;" @click="filterGradients('magentas')" :class="{ active: isActiveShortlist('magentas')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#fff;" @click="filterGradients('whites')" :class="{ active: isActiveShortlist('whites')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#c0c0cb;" @click="filterGradients('grays')" :class="{ active: isActiveShortlist('grays')}">
        <a href="#" class="shortlist__link"></a>
      </li>
      <li class="shortlist__item" style="background-color:#333;" @click="filterGradients('blacks')" :class="{ active: isActiveShortlist('blacks')}">
        <a href="#" class="shortlist__link"></a>
      </li> -->
    </ul>

    <ul class="palette__list">

      <li class="palette__item" v-for="gradient in filteredGradients">
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
  data() {
    return {
      currentFilter: false,
      shortlists: [
        { name: 'reds', color: '#cb2d3e' },
        { name: 'yellows', color: '#ffd200' },
        { name: 'greens', color: '#159957' },
        { name: 'cyans', color: '#1cb5e0' },
        { name: 'blues', color: '#155799' },
        { name: 'magentas', color: '#ef32d9' },
        { name: 'whites', color: '#eaeaea' },
        { name: 'grays', color: '#c0c0cb' },
        { name: 'blacks', color: '#333333' },
      ],
    };
  },
  methods: {
    isActiveShortlist(color) {
      return (this.currentFilter === color);
    },
    updateGradient(name) {
      this.$emit('updateGradient', name);
    },
    clearFilter() {
      this.filterGradients(false);
    },
    filterGradients(name) {
      this.currentFilter = name;
    },
  },
  computed: {
    filteredGradients() {
      if (this.currentFilter) {
        switch (this.currentFilter) {
          case 'reds':
            return this.redPalettes;
          case 'yellows':
            return this.yellowPalettes;
          case 'greens':
            return this.greenPalettes;
          case 'cyans':
            return this.cyanPalettes;
          case 'blues':
            return this.bluePalettes;
          case 'magentas':
            return this.magentaPalettes;
          case 'whites':
            return this.whitePalettes;
          case 'grays':
            return this.greyPalettes;
          case 'blacks':
            return this.blackPalettes;
          default:
            break;
        }
      }
      return this.classifiedColors;
    },
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
    filterPalettes() {
      return color => this.classifiedColors.filter(gradient => gradient.palletes.includes(color));
    },
    cyanPalettes() {
      return this.filterPalettes('Cyans');
    },
    redPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Reds'));
    },
    yellowPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Yellows'));
    },
    greenPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Greens'));
    },
    bluePalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Blues'));
    },
    magentaPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Magentas'));
    },
    blackPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Blacks'));
    },
    whitePalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Whites'));
    },
    greyPalettes() {
      return this.classifiedColors.filter(gradient => gradient.palletes.includes('Grays'));
    },
  },
};
</script>
