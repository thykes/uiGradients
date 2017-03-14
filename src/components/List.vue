<template>
  <div :class="{ 'active': palette, 'palette': true }">
    <ul class="palette__list">

      <li class="palette__item" v-for="gradient in gradients">
        <Palette :gradient="gradient" />
      </li>

    </ul>
  </div>
</template>

<script>
import Palette from './Palette';

export default {
  name: 'list',
  props: ['gradients', 'palette'],
  components: {
    Palette,
  },
};
</script>
