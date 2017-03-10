<template>
  <header class="header">
    <Logo class="header__logo" />
    <ul class="social header__social">
      <li>Twitter</li>
      <li>Facebook</li>
    </ul>
  </header>
</template>

<script>
import Logo from '../assets/logo.svg';

export default {
  name: 'topbar',
  components: {
    Logo,
  },
  data() {
    return {
      msg: 'Hello, is it me you are looking for?',
    };
  },
};
</script>
