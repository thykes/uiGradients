<template>
  <div class="palette__gradient" :style="backgroundStyle">
      <p class="palette__name" style="color: rgb(255, 255, 255);">{{ gradient.name }}</p>
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
};
</script>
