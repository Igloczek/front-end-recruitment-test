<template>
  <section
    class="steps-section"
    data-test="steps-section"
  >
    <h2 class="steps-section__header">
      <span
        aria-hidden="true"
        class="steps-section__index"
        v-text="index"
      />
      <span
        class="steps-section__title"
        v-text="title"
      />
      <span
        aria-hidden="true"
        class="steps-section__icon"
      >
        <slot name="header-icon" />
      </span>
    </h2>
    <div class="steps-section__wrapper">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "StepsSection",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.steps-section__header {
  display: grid;
  gap: var(--checkout-steps-header-gap-size);
  grid-template: 1fr / min-content 1fr min-content;
  align-items: center; 
  margin: 0 0 20px 0;
}

.steps-section__index {
  border-radius: 50%;
  background-color: var(--checkout-steps-header-index-background-color);
  color: var(--checkout-steps-header-index-color);
  font-size: 15px;
  line-height: 0;
  height: var(--checkout-steps-header-index-size);
  width: var(--checkout-steps-header-index-size);
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps-section__title {
  text-transform: uppercase;
  font-size: 14px;
  color: var(--checkout-steps-header-color);
}

.steps-section__icon {
  fill: var(--checkout-steps-header-icon-color);
  color: var(--checkout-steps-header-icon-color);
}

.steps-section__wrapper {
  padding-left: calc(var(--checkout-steps-header-index-size) + var(--checkout-steps-header-gap-size))
}
</style>