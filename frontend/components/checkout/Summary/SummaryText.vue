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
      v-text="value"
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
      type: String,
      required: true,
    }
  }
}
</script>

<style src="./SummaryText.css" scoped></style>