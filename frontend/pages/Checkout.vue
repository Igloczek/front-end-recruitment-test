<template>
  <BaseArticle class="pages-checkout">
    <section class="pages-checkout__checkout-steps">
      Steps
    </section>
    <Summary
      class="pages-checkout__summary"
      :cart="cart"
    />
  </BaseArticle>
</template>

<script>
import Summary from '../components/checkout/Summary/Summary.vue'

export default {
  name: 'pagesCheckout',
  metaInfo: {
    title: 'Checkout',
  },
  components: {
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
    "summary" 1fr
    "checkout-steps" 1fr
      / 1fr;
  font-family: var(--checkout-font-family);
  max-width: 960px;
  margin: 0 auto;
  padding: 48px;
}

@media screen and (min-width: 768px) {
  .pages-checkout {
    grid-template: "checkout-steps summary" 1fr / 2fr 1fr;
  }
}

.pages-checkout__checkout-steps {
  grid-area: checkout-steps;
}

.pages-checkout__summary {
  grid-area: summary;
}
</style>