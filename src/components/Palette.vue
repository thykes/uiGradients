<template>
  <div class="palette__gradient" :style="backgroundStyle" @click.prevent="updateGradient(gradient.name)">
      <p class="palette__name">{{ gradient.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'palette',
  props: ['gradient'],
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors];
      return {
        background: `linear-gradient(to left, ${colors})`,
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
