<template>
  <form class="steps">
    <StepsSection
      class="steps__personal-information"
      :index="1"
      :title="$t('pages.checkout.personalInformation.title')"
    >
      <div class="steps__form-section steps__form-section--personal-information">
        <template v-for="(item, index) in personalInformationForm">
          <StepsFormWrapper
            :key="index"
            v-bind="item.wrapper"
          >
            <component
              :is="item.component"
              v-bind="item.props"
              v-on="item.listeners"
            />
            <template #additional-info>
              <component
                :is="item.infoComponent"
                v-bind="item.infoComponentProps"
              />
            </template>
          </StepsFormWrapper>
        </template>
      </div>
    </StepsSection>
    <StepsSection
      class="steps__payment-details"
      :index="2"
      :title="$t('pages.checkout.paymentDetails.title')"
    >
      <template #header-icon>
        <img
          aria-hidden="true"
          class="steps__payment-details-icon"
          :src="padlockIcon"
        >
      </template>
      <div class="steps__form-section steps__form-section--personal-information">
        <template v-for="(item, index) in paymentDetailsForm">
          <StepsFormWrapper
            :key="index"
            v-bind="item.wrapper"
          >
            <component
              :is="item.component"
              v-bind="item.props"
              v-on="item.listeners"
            />
            <template #additional-info>
              <component
                :is="item.infoComponent"
                v-bind="item.infoComponentProps"
              />
            </template>
          </StepsFormWrapper>
        </template>
      </div>
    </StepsSection>
    <StepsButtonSubmit @submit="submitCallback" />
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, integer } from 'vuelidate/lib/validators'
import ordersService from '../../../services/orders.js'
import routeNames from '../../../router/names.js'
import StepsFormWrapper from './StepsFormWrapper.vue'
import StepsSection from './StepsSection.vue'
import StepsButtonSubmit from './StepsButtonSubmit.vue'

export default {
  name: "Steps",
  components: {
    StepsSection,
    StepsFormWrapper,
    StepsButtonSubmit,
  },
  mixins: [validationMixin],
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        email: '',
        country: 'US',
        postalCode: '',
        phone: '',
        creditCard: '',
        CVV: '',
        expDate: '',
      }
    }
  },
  computed: {
    padlockIcon() {
      return require('../../../assets/images/padlock.svg');
    },
    personalInformationForm() {
      return [
        this.createFormInput({
          type: 'text',
          valueProp: 'firstName',
        }),
        this.createFormInput({
          type: 'text',
          valueProp: 'lastName',
        }),
        this.createFormInput({
          type: 'email',
          valueProp: 'email',
          mask: 'ZZZ*',
          isTwoColumns: true
        }),
        this.createFormSelect({
          valueProp: 'country',
          options: [
            ['US', this.$t('pages.checkout.countryOptions.US')]
          ],
        }),
        this.createFormInput({
          type: 'text',
          valueProp: 'postalCode',
          mask: '#####'
        }),
        this.createFormInput({
          type: 'tel',
          valueProp: 'phone',
          mask: '(###) ###-##-##',
          isTwoColumns: true
        }),
      ]
    },
    paymentDetailsForm() {
      return [
        this.createFormInput({
          type: 'text',
          valueProp: 'creditCard',
          mask: '####-####-####-####',
          isTwoColumns: true,
          infoComponent: () => import(/* webpackChunkName: "pages-checkout" */ './StepsCCIcon.vue'),
          infoComponentProps: {
            cc: this.order.creditCard,
            class: 'steps__form-additional-info'
          }
        }),
        this.createFormInput({
          type: 'password',
          valueProp: 'CVV',
          mask: '###',
          infoComponent: () => import(/* webpackChunkName: "pages-checkout" */ './StepsCVVTooltip.vue'),
          infoComponentProps: {
            class: 'steps__form-additional-info'
          }
        }),
        this.createFormInput({
          type: 'text',
          valueProp: 'expDate',
          mask: '##/##'
        }),
      ]
    }
  },
  methods: {
    createFormSelect({ valueProp, options, isTwoColumns = false }) {
      const _that = this;
      return {
          wrapper: {
            label: this.$t(`pages.checkout.orderForm.${valueProp}`),
            inputName: valueProp,
            isError: this.$v.order[valueProp].$dirty && this.$v.order[valueProp].$invalid,
            class: [
              'steps__form-control',
              isTwoColumns ? 'steps__form-control--two-columns' : ''
            ],
          },
          component: 'base-select',
          props: {
            value: this.order[valueProp],
            id: valueProp,
            name: valueProp,
            required: this.$v.order[valueProp].required,
            options,
          },
          listeners: {
            change(v) {
              if (v) {
                console.log('change', v, _that.order[valueProp]);
                _that.order[valueProp] = v;
              }
            },
          }
        }
    },
    createFormInput({ type, valueProp, infoComponent, infoComponentProps, mask = 'X*', isTwoColumns = false }) {
      const _that = this;
      return {
        wrapper: {
          label: this.$t(`pages.checkout.orderForm.${valueProp}`),
          inputName: valueProp,
          isError: this.$v.order[valueProp].$dirty && this.$v.order[valueProp].$invalid,
          class: [
            'steps__form-control',
            isTwoColumns ? 'steps__form-control--two-columns' : ''
          ],
        },
        component: 'base-input',
        props: {
          type: type,
          value: this.order[valueProp],
          id: valueProp,
          name: valueProp,
          required: this.$v.order[valueProp].required,
          mask,
          placeholder: this.$t(`pages.checkout.orderForm.${valueProp}Placeholder`),
        },
        listeners: {
          input(v) {
            if (v) {
              _that.order[valueProp] = v;
            }
          },
        },
        infoComponent,
        infoComponentProps,
      }
    },
    submitCallback() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      const expDate = this.insert(this.order.expDate, 2, '/');

      ordersService.setOrder({ ...this.order, expDate })
        .then(() => {
          alert(this.$t('pages.checkout.completePurchase.success'));
          this.$router.replace({
            name: routeNames.PAGE_HOME,
          })
        })
        .catch(() => {
          alert(this.$t('pages.checkout.completePurchase.fail'));
        })
    },
    insert(str, index, value) {
      return str.substr(0, index) + value + str.substr(index);
    }
  },
  validations() {
    const zipValidators = {
      'US': v => (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(v),
    };
    const isLength = len => v => v.length === len
    const isValidCountry = v => ['US'].includes(v)
    return {
      order: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        country: { required, isValidCountry },
        postalCode: { required, zip: zipValidators[this.order.country] },
        phone: { required, integer },
        creditCard: { required, integer, len: isLength(16) },
        CVV: { required, integer, len: isLength(3) },
        expDate: { required, integer, len: isLength(4) },
      }
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

@media screen and (min-width: 768px) {
  .steps {
    padding-left: calc(var(--checkout-steps-header-index-size) + var(--checkout-steps-header-gap-size));
  }
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

.steps__form-control--two-columns {
  grid-column: 1 / span 2;
}

.steps__form-additional-info {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
}
</style>