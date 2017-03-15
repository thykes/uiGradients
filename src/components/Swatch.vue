<template>
  <li class="hex mono">
    <span class="hex__block" :style="{ background: color }"></span>
    <span class="hex__name">{{color | lowercase}}</span>
    <span class="hex__arrow">→&nbsp;</span>
  </li>
</template>


<script>
export default {
  name: 'swatch',
  props: ['color'],
  filters: {
    lowercase(value) {
      return (!value) ? '' : value.toString().toLowerCase();
    },
  },
};
</script>
