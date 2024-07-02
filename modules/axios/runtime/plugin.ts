import { defineNuxtPlugin } from 'nuxt/app'
import axios from 'axios'

export const $axios = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    AccessToken: 'abcjddiawjdw',
  },
  withCredentials: true,
})

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: $axios,
    },
  }
})
