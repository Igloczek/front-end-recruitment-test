<template>
  <BaseArticle class="pages-checkout">
    <Steps class="pages-checkout__checkout-steps" />
    <Summary
      class="pages-checkout__summary"
      :cart="cart"
    />
  </BaseArticle>
</template>

<script>
import Steps from '../components/checkout/Steps/Steps.vue'
import Summary from '../components/checkout/Summary/Summary.vue'

export default {
  name: 'PagesCheckout',
  metaInfo() {
    return {
      title: this.$t('pages.checkout.title')
    }
  },
  components: {
    Steps,
    Summary,
  },
  computed: {
    cart() {
      return {
        items: [
          { name: 'Apple Watch Sport', price: 580 },
          { name: 'Modern Buckle', price: 380 },
        ],
        totals: {
          subTotal: 960,
          tax: 0,
          grandTotal: 960,
        },
      };
    }
  },
}
</script>

<style scoped>
.pages-checkout {
  background-color: var(--checkout-background-color);
  display: grid;
  gap: 38px 12px;
  grid-template: 
    "summary" auto
    "checkout-steps" auto
      / 1fr;
  font-family: var(--checkout-font-family);
  max-width: 960px;
  margin: 0 auto;
  padding: 48px;
  align-items: start;
}

@media screen and (min-width: 768px) {
  .pages-checkout {
    grid-template: "checkout-steps summary" 1fr / 2fr minmax(240px, 1fr);
  }
}

.pages-checkout__checkout-steps {
  grid-area: checkout-steps;
}

.pages-checkout__summary {
  grid-area: summary;
}
</style>