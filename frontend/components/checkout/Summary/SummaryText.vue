<template>
  <div
    class="summary-text"
    data-test="summary-text"
  >
    <span
      class="summary-text__name"
      v-text="name"
    />
    <span
      class="summary-text__value"
      v-text="valueWithDecimalNumbers"
    />
  </div>
</template>

<script>
export default {
  name: "SummaryText",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    decimalNumbers: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    valueWithDecimalNumbers() {
      return this.value.toFixed(this.decimalNumbers);
    }
  }
}
</script>

<style src="./SummaryText.css" scoped></style>