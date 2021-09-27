<template>
  <div class="steps-cc-icon">
    <img
      aria-hidden="true"
      class="steps-cc-icon__icon"
      :src="ccIcon"
    >
  </div>
</template>

<script>
const ccTypes = {
  UKNOWN: 'UNKNOWN',
  VISA: 'VISA'
}

export default {
  name: "StepsCCIcon",
  props: {
    cc: {
      type: String,
      required: true,
    }
  },
  computed: {
    ccType() {
      return this.cc.length >= 4
        ? ccTypes.VISA
        : ccTypes.UKNOWN;
    },
    ccIcon() {
      const ccIcons = {
        [ccTypes.UKNOWN]: require('../../../assets/images/cc_unknown.svg'),
        [ccTypes.VISA]: require('../../../assets/images/cc_visa.svg'),
      }
      return ccIcons[this.ccType];
    }
  }
}
</script>

<style scoped>
.steps-cc-icon {
  border-radius: var(--checkout-border-radius);
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 40px;
  padding: 3px;
  box-sizing: border-box;
}

.steps-cc-icon__icon {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>