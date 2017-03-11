<template>
  <div class="hex mono">
    <span class="hex__block" :style="{ background: color }"></span>
    {{color}}
  </div>
</template>


<script>
export default {
  name: 'swatch',
  props: ['color'],
};
</script>
