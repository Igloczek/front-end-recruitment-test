<template>
  <button
    class="steps-button-submit"
    data-test="steps-button-submit"
    type="submit"
    @click.prevent="$emit('submit')"
  >
    <img
      aria-hidden="true"
      class="steps-button-submit__icon"
      :src="cartIcon"
    >
    {{ $t('pages.checkout.submitButtonLabel') }}
  </button>
</template>

<script>
import cartIcon from '../../../assets/images/cart.svg'

export default {
  name: 'StepsButtonSubmit',
  computed: {
    cartIcon() {
      return cartIcon;
    },
  },
}
</script>

<style scoped>
.steps-button-submit {
  appearance: none;
  font-family: var(--checkout-font-family);
  text-transform: uppercase;
  font-weight: bold;
  background-color: var(--checkout-form-submit-background-color);
  color: var(--checkout-form-submit-color);
  box-shadow: var(--checkout-form-submit-box-shadow);
  border-radius: var(--checkout-border-radius);
  margin-left: calc(var(--checkout-steps-header-index-size) + var(--checkout-steps-header-gap-size));
  border: 0;
  padding: 16px;
  cursor: pointer;
  opacity: 1.0;
  transition: opacity var(--base-animation-time) ease, box-shadow var(--base-animation-time) ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps-button-submit:hover {
  opacity: 0.75;
}

.steps-button-submit:active {
  box-shadow: var(--checkout-form-submit-box-shadow-clicked);
}

.steps-button-submit__icon {
  width: 16px;
  min-width: 16px;
  margin-right: 8px;
}
</style>