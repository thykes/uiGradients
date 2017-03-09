<template>
  <div id="app">
    <hello></hello>
    <gradient></gradient>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Gradient from './components/Gradient';

export default {
  name: 'app',
  components: {
    Gradient,
    Hello,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
