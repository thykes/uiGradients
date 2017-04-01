<template>
  <header class="header" v-once>
    <Logo class="header__logo" />
    <ul class="social header__social">
      <li>
        <a href="" class="button button--twitter">
          <Twitter class="button__icon" />
          <span>Share on Twitter</span>
        </a>
      </li>
      <li class="ml10">
        <a href="" class="button button--facebook">
          <Facebook class="button__icon" />
          <span>Share on Facebook</span>
        </a>
      </li>
      <li class="ml10">
        <a href="https://github.com/Ghosh/uiGradients" target="_blank">
          <Github class="header__github" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Github from '../assets/github.svg';

export default {
  name: 'topbar',
  components: {
    Logo,
    Facebook,
    Twitter,
    Github,
  },
};
</script>
