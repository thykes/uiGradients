<template>
  <Modal :show.sync="show" :on-close="closeModals">

      <h3 class="modal__title">
        Copy CSS Code
      </h3>

<pre><code>
    background: {{ this.gradient.colors[0] }}; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, {{ [...this.gradient.colors].join(', ') }}); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, {{ [...this.gradient.colors].join(', ') }}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
