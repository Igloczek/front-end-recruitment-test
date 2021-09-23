<template>
  <div
    :class="classNames"
    data-test="summary-section"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "SummarySection",
  props: {
    featured: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classNames() {
      return [
        'summary-section',
        this.featured ? 'summary-section--featured' : '',
      ]
    }
  }
}
</script>

<style scoped>
.summary-section {
  padding: 15px 0;
  margin: 0 15px;
  display: grid;
  gap: 15px;
}

.summary-section--featured {
  border-top: var(--checkout-summary-inner-border);
  border-bottom: var(--checkout-summary-inner-border);
}
</style>