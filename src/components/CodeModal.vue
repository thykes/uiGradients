<template>
  <Modal :show.sync="show" :on-close="closeModals">

      <h3 class="modal__title">
        Copy CSS Code
      </h3>

<pre class="codeblock"><code>
    <span class="codeblock__property">background</span>: <span class="codeblock__spec">{{ this.gradient.colors[0] }}</span>; <span class="codeblock__comment">/* fallback for old browsers */</span>
    <span class="codeblock__property">background</span>: -webkit-linear-gradient(to left, <span class="codeblock__spec">{{ [...this.gradient.colors].join(', ') }}</span>); <span class="codeblock__comment">/* Chrome 10-25, Safari 5.1-6 */</span>
    <span class="codeblock__property">background</span>: linear-gradient(to left, <span class="codeblock__spec">{{ [...this.gradient.colors].join(', ') }}</span>); <span class="codeblock__comment">/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */</span>
</code></pre>

      <button class="btn">
          Copy Code
      </button>

  </Modal>
</template>


<script>
import Modal from './Modal';

export default {
  name: 'codemodal',
  props: ['show', 'gradient', 'closeModals'],
  components: {
    Modal,
  },
};
</script>
