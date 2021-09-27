<template>
  <select
    class='base-select'
    data-test='base-select'
    @change="onChange"
  >
    <template v-for="[ value, label ] in options">
      <option
        :key="value"
        :value="value"
        v-text="label"
      />
    </template>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>
.base-select {
  width: calc(100% + 4px);
  font-family: var(--checkout-font-family);
  font-size: var(--checkout-form-font-size);
  border: 0;
  padding: 0;
  margin: 0;
  position: relative;
  left: -4px;
}
</style>