<template>
  <input
    class="steps-input-text"
    v-maska="computedMask"
    v-model="value"
    @maska="inputCallback"
  />
</template>

<script>
import { maska } from 'maska'

export default {
  name: "StepsInputText",
  directives: {
    maska
  },
  props: {
    mask: {
      type: String,
      default: '*',
    },
  },
  data() {
    return {
      value: ''
    };
  },
  computed: {
    computedMask() {
      return { mask: this.mask, tokens: { 'Z': { pattern: /./ }}}
    }
  },
  methods: {
    inputCallback(e) {
      const value = e.target.getAttribute('data-mask-raw-value');
      this.$emit('input', value)
    }
  }
}
</script>

<style>
.steps-input-text {
  appearance: none;
  width: 100%;
  font-family: var(--checkout-font-family);
  font-size: var(--checkout-form-font-size);
  border: 0;
  box-shadow: 0;
  padding: 0;
}
</style>