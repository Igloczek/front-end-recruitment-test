<template>
  <aside class="summary">
    <div class="summary__wrapper">
      <SummarySection class="summary__cart">
        <SummaryHeader
          :type="4"
          text="Your order"
        />
        <template v-for="(items, index) in cart.items">
          <SummaryText
            :key="index"
            :name="items.name"
            :value="items.price.toString()"
          />
        </template>
      </SummarySection>
      <SummarySection :featured="true">
        <SummaryText
          name="Total purchases"
          :value="cart.totals.subTotal.toFixed(2)"
        />
        <SummaryText
          name="Estimated tax"
          :value="cart.totals.tax.toString()"
        />
      </SummarySection>
      <SummarySection class="summary__grand-total">
        <SummaryTextTotal name="Total" :value="cart.totals.grandTotal.toString()" />
      </SummarySection>
    </div>
  </aside>
</template>

<script>
import SummaryHeader from './SummaryHeader.vue'
import SummaryText from './SummaryText.vue'
import SummaryTextTotal from './SummaryTextTotal.vue'
import SummarySection from './SummarySection.vue'

export default {
  name: "Summary",
  components: {
    SummaryHeader,
    SummaryText,
    SummaryTextTotal,
    SummarySection,
  },
  props: {
    cart: {
      type: Object,
      required: true,
      validator(v) {
        try {
          const isItemsValid = v.items.every(el => typeof el.name === "string" && typeof el.price === "number");
          const isTotalValid = [
            typeof v.totals.subTotal,
            typeof v.totals.tax,
            typeof v.totals.grandTotal
          ].every(el => el === "number");
          return isItemsValid && isTotalValid;
        } catch (e) {
          return false
        }
      }
    }
  }
}
</script>

<style scoped>
.summary {
  background-color: var(--checkout-summary-background-color);
  border-radius: var(--checkout-border-radius);
  padding: 5px;
  box-shadow: var(--checkout-box-shadow);
}

.summary__wrapper {
  border: var(--checkout-summary-inner-border);
  border-radius: var(--checkout-border-radius);
}

.summary__cart {
  padding-bottom: 25px;
}

.summary__grand-total {
  padding-bottom: 35px;
}
</style>