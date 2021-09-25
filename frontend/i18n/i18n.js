import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Load pages messages
const requireComponent = require.context('./pages', true, /\.js$/)
const pagesMessages = requireComponent.keys().map(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '')
  return [componentName, componentConfig.default || componentConfig]
})

export default new VueI18n({
  locale: 'en',
  messages: {
    en: {
      pages: {
        ...Object.fromEntries(pagesMessages),
      },
      common: {
        titleDefault: 'App',
        titleSuffix: 'My Recruitment Task',
      },
    },
  },
})
