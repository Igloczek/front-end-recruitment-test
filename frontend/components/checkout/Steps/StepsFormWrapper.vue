<template>
  <div
    :class="classNames"
    data-test="steps-form-wrapper"
  >
    <label
      class="steps-from-wrapper__label"
      :for="inputName"
      v-text="label"
    />
    <div class="steps-form-wrapper__form-control">
      <slot />
    </div>
    <slot name="additional-info" />
  </div>
</template>

<script>
export default {
  name: "StepsFormWrapper",
  props: {
    label: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classNames() {
      return [
        'steps-form-wrapper',
        this.isError ? 'steps-form-wrapper--error' : '',
      ];
    }
  }
}
</script>

<style scoped>
.steps-form-wrapper {
  background-color: var(--checkout-form-background);
  border-radius: var(--checkout-border-radius);
  box-shadow: var(--checkout-box-shadow);
  padding: 8px 12px;
  position: relative;
}

.steps-form-wrapper--error {
  border: var(--checkout-form-error-border);
}

.steps-from-wrapper__label {
  color: var(--checkout-form-label-color);
  font-size: var(--checkout-form-label-font-size);
  font-weight: bold;
}
</style>