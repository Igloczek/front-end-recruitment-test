<template>
  <div class='steps-cvv-tooltip'>
    ?
    <div class='steps-cvv-tooltip__flyout'>
      {{ $t('pages.checkout.paymentDetails.ccvTooltip') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepsCVVTooltip'
}
</script>

<style scoped>
.steps-cvv-tooltip {
  position: relative;
  border-radius: 50%;
  border: 1px solid var(--checkout-form-ccv-tooltip-color);
  color: var(--checkout-form-ccv-tooltip-color);
  width: 18px;
  height: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
}

.steps-cvv-tooltip:hover .steps-cvv-tooltip__flyout {
  display: block;
}

.steps-cvv-tooltip__flyout {
  display: none;
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  width: 120px;
  font-size: 12px;
  color: var(--checkout-form-label-color);
  background-color: var(--checkout-form-background);
  border-radius: var(--checkout-border-radius);
  box-shadow: var(--checkout-box-shadow);
  padding: 12px;
  z-index: 2;
}
</style>