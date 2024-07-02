import { defineNuxtPlugin } from 'nuxt/app'
import { handleAlert } from './alert.store'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      alert: handleAlert,
    },
  }
})
