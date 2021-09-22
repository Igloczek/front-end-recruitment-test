<template>
  <component
    :is="sanitizedHeaderTag"
    :class="classNames"
    v-text="text"
  />
</template>

<script>
const typeValidator = (value) => [1, 2, 3, 4, 5, 6].includes(value)

export default {
  name: "BaseHeader",
  props: {
    type: {
      type: Number,
      default: 1,
      validator: typeValidator,
    },
    text: {
      type: String,
      required: true,
    }
  },
  computed: {
    sanitizedHeaderTag() {
      return typeValidator(this.type)
        ? `h${this.type}`
        : 'h1'
    },
    classNames() {
      return [
        'base-header',
        `base-header--${this.type}`
      ];
    }
  }
}
</script>