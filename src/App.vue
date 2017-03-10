<template>
  <div id="app">
    <topbar></topbar>
    <actionbar></actionbar>
    <Display></Display>
  </div>
</template>

<script>
import Topbar from './components/Topbar';
import Actionbar from './components/Actionbar';
import Display from './components/Display';

export default {
  name: 'app',
  components: {
    Topbar,
    Display,
    Actionbar,
  },
};
</script>
