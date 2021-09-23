<template>
  <component
    :is="sanitizedHeaderTag"
    :class="classNames"
    data-test="summary-header"
    v-text="text"
  />
</template>

<script>
const typeValidator = (value) => [1, 2, 3, 4, 5, 6].includes(value)

export default {
  name: "SummaryHeader",
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
        'summary-header',
        `summary-header--${this.type}`
      ];
    }
  }
}
</script>

<style scoped>
.summary-header {
  text-transform: uppercase;
  color: var(--checkout-summary-header-color);
  margin: 0;
  line-height: 1.25em;
}

.summary-header--4 {
  font-size: 15px;
}
</style>