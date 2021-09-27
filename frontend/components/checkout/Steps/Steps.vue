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
          :src="padlock"
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
import padlock from '../../../assets/images/padlock.svg'
import routeNames from '../../../router/names'
import StepsFormWrapper from './StepsFormWrapper.vue'
import StepsSection from './StepsSection.vue'
import StepsButtonSubmit from './StepsButtonSubmit.vue'
import StepsCVVTooltip from './StepsCVVTooltip.vue'
import StepsCCIcon from './StepsCCIcon.vue'
import BaseInput from '../../common/BaseInput.vue'
import BaseSelect from '../../common/BaseSelect.vue'

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
      user: {
        firstName: '',
        lastName: '',
        email: '',
        country: 'US',
        postalCode: '',
        phone: '',
      },
      payment: {
        cc: '',
        cvv: '',
        expirationDate: '',
      }
    }
  },
  computed: {
    padlock() {
      return padlock
    },
    personalInformationForm() {
      return [
        this.createPersonalInformationFormItem({
          component: BaseInput,
          type: 'text',
          valueProp: 'firstName',
        }),
        this.createPersonalInformationFormItem({
          component: BaseInput,
          type: 'text',
          valueProp: 'lastName',
        }),
        this.createPersonalInformationFormItem({
          component: BaseInput,
          type: 'email',
          valueProp: 'email',
          mask: 'ZZZ*',
          isTwoColumns: true
        }),
        this.createPersonalInformationFormItemSelect({
          component: BaseSelect,
          valueProp: 'country',
          options: [
            ['US', this.$t('pages.checkout.countryOptions.US')]
          ],
        }),
        this.createPersonalInformationFormItem({
          component: BaseInput,
          type: 'text',
          valueProp: 'postalCode',
          mask: '#####'
        }),
        this.createPersonalInformationFormItem({
          component: BaseInput,
          type: 'tel',
          valueProp: 'phone',
          mask: '(###) ###-##-##',
          isTwoColumns: true
        }),
      ]
    },
    paymentDetailsForm() {
      return [
        this.createPaymentDetailsFormItem({
          component: BaseInput,
          type: 'text',
          valueProp: 'cc',
          mask: '####-####-####-####',
          isTwoColumns: true,
          infoComponent: StepsCCIcon,
          infoComponentProps: {
            cc: this.payment.cc,
            class: 'steps__form-additional-info'
          }
        }),
        this.createPaymentDetailsFormItem({
          component: BaseInput,
          type: 'password',
          valueProp: 'cvv',
          mask: '###',
          infoComponent: StepsCVVTooltip,
          infoComponentProps: {
            class: 'steps__form-additional-info'
          }
        }),
        this.createPaymentDetailsFormItem({
          component: BaseInput,
          type: 'text',
          valueProp: 'expirationDate',
          mask: '##/##'
        }),
      ]
    }
  },
  methods: {
    createPersonalInformationFormItemSelect({ component, valueProp, options, isTwoColumns = false }) {
      const _that = this;
      return {
          wrapper: {
            label: this.$t(`pages.checkout.personalInformation.${valueProp}`),
            inputName: valueProp,
            isError: this.$v.user[valueProp].$dirty && this.$v.user[valueProp].$invalid,
            class: [
              'steps__form-control',
              isTwoColumns ? 'steps__form-control--two-columns' : ''
            ],
          },
          component,
          props: {
            value: this.user[valueProp],
            id: valueProp,
            name: valueProp,
            required: this.$v.user[valueProp].required,
            options,
          },
          listeners: {
            change(v) {
              if (v) {
                console.log('change', v, _that.user[valueProp]);
                _that.user[valueProp] = v;
              }
            },
          }
        }
    },
    createPersonalInformationFormItem({ component, type, valueProp, mask = 'X*', isTwoColumns = false }) {
      const _that = this;
      return {
          wrapper: {
            label: this.$t(`pages.checkout.personalInformation.${valueProp}`),
            inputName: valueProp,
            isError: this.$v.user[valueProp].$dirty && this.$v.user[valueProp].$invalid,
            class: [
              'steps__form-control',
              isTwoColumns ? 'steps__form-control--two-columns' : ''
            ],
          },
          component,
          props: {
            type: type,
            value: this.user[valueProp],
            id: valueProp,
            name: valueProp,
            required: this.$v.user[valueProp].required,
            mask,
            placeholder: this.$t(`pages.checkout.personalInformation.${valueProp}Placeholder`),
          },
          listeners: {
            input(v) {
              if (v) {
                _that.user[valueProp] = v;
              }
            },
          }
        }
    },
    createPaymentDetailsFormItem({ component, type, valueProp, infoComponent, infoComponentProps, mask = 'X*', isTwoColumns = false }) {
      const _that = this;
      return {
          wrapper: {
            label: this.$t(`pages.checkout.paymentDetails.${valueProp}`),
            inputName: valueProp,
            isError: this.$v.payment[valueProp].$dirty && this.$v.payment[valueProp].$invalid,
            class: [
              'steps__form-control',
              isTwoColumns ? 'steps__form-control--two-columns' : ''
            ],
          },
          component,
          props: {
            type: type,
            value: this.payment[valueProp],
            id: valueProp,
            name: valueProp,
            required: this.$v.payment[valueProp].required,
            mask,
            placeholder: this.$t(`pages.checkout.paymentDetails.${valueProp}Placeholder`),
          },
          listeners: {
            input(v) {
              if (v) {
                _that.payment[valueProp] = v;
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

      ordersService.setOrder({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        country: this.user.country,
        postalCode: this.user.postalCode,
        phone: this.user.phone,
        creditCard: this.payment.cc,
        CVV: this.payment.cvv,
        expDate: this.insert(this.payment.expirationDate, 2, '/'),
      }).then(() => {
        alert(this.$t('pages.checkout.completePurchase.success'));
        this.$router.replace({
          name: routeNames.PAGE_HOME,
        })
      }).catch(() => {
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
      user: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        country: { required, isValidCountry },
        postalCode: { required, zip: zipValidators[this.user.country] },
        phone: { required, integer },
      },
      payment: {
        cc: { required, integer, len: isLength(16) },
        cvv: { required, integer, len: isLength(3) },
        expirationDate: { required, integer, len: isLength(4) },
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

.steps__form-section {
  display: grid;
  gap: 12px 18px;
  grid-template: repeat(auto-fit, minmax(0, max-content)) / 1fr 1fr;
}

.steps__payment-details-icon {
  width: 12px;
  height: 12px;
}

.steps__form-control {

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