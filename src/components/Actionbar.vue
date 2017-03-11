<template>
  <section class="actionbar">
    <div class="actionbar__section">
        <a href="#" class="burger menu" id="js-burger-menu">
            <span class="menu__icon"></span>
            Show all gradients
        </a>
    </div>

    <div class="actionbar__section tac">
      <div class="hex mono"><span class="hex__block"></span> #eaeaed</div>
      &nbsp;
      →
      &nbsp;
      <div class="hex mono"><span class="hex__block"></span> #eaeaed</div>
    </div>

    <div class="actionbar__section tar">
      <a href="#" class="trigger">
        <Brackets class="trigger__icon" /> Get CSS code
      </a>
      <a href="#" class="trigger">
        <Add class="trigger__icon" /> Add Gradient
      </a>
    </div>
  </section>
</template>


<script>
import Add from '../assets/add.svg';
import Brackets from '../assets/code.svg';

export default {
  name: 'actionbar',
  props: ['gradient'],
  components: {
    Add, Brackets,
  },
};
</script>
