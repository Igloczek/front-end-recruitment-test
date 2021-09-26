<template>
  <div class="steps">
    <StepsSection
      class="steps__personal-information"
      :index="1"
      :title="$t('pages.checkout.personalInformation.title')"
    >
      <div class="steps__form-section steps__form-section--personal-information">
        <!-- Personal Information Form -->
      </div>
    </StepsSection>
    <StepsSection
      class="steps__payment-details"
      :index="2"
      :title="$t('pages.checkout.paymentDetails.title')"
    >
      <template v-slot:header-icon>
        <img aria-hidden="true" class="steps__payment-details-icon" :src="padlock" />
      </template>
      <div class="steps__form-section steps__form-section--personal-information">
        <!-- Payment Details Form -->
      </div>
    </StepsSection>
    <!-- Button -->
  </div>
</template>

<script>
import padlock from '../../../assets/images/padlock.svg'
import StepsSection from './StepsSection.vue'

export default {
  name: "Steps",
  components: {
    StepsSection,
  },
  computed: {
    padlock() {
      return padlock
    }
  }
}
</script>

<style scoped>
.steps {
  display: grid;
  gap: 36px;
  grid-template: repeat(auto-fit, minmax(0, max-content)) / 1fr;
}

.steps__form-section {
  display: grid;
  gap: 12px 18px;
  grid-template: repeat(auto-fit, minmax(0, max-content)) / 1fr 1fr;
}

.steps__payment-details-icon {
  width: 12px;
  height: 12px;
}
</style>