<template>
  <div class="palette__gradient" :style="backgroundStyle" @click.prevent="updateGradient(gradient.name)">
      <p class="palette__name">{{ gradient.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'palette',
  props: ['gradient', 'direction'],
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors].reverse();
      const direction = this.direction;
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
  },
  methods: {
    updateGradient(name) {
      this.$emit('updateGradient', name);
    },
  },
};
</script>
