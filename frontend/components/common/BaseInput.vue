<template>
  <input
    v-model="value"
    v-maska="computedMask"
    class="base-input"
    data-test="base-input"
    @maska="inputCallback"
  >
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
      default: 'Z*',
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
.base-input {
  appearance: none;
  width: 100%;
  font-family: var(--checkout-font-family);
  font-size: var(--checkout-form-font-size);
  border: 0;
  box-shadow: 0;
  padding: 0;
}
</style>