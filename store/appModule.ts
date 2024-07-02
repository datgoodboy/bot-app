import { defineStore } from 'pinia'
import { User } from '~/domain/User/User'
import { $axios } from '~/modules/axios/runtime/plugin'

interface AppState {
  user: User | null
}

export const useAppStore = defineStore('app', {
  state: () =>
    ({
      user: null,
    } as AppState),
  actions: {
    async login(formData: { email: string; password: string }) {
      const response = await $axios.post('api/v1/auth', formData)
      if (response && response.data) {
        this.user = response.data.user
      }
      return response.data
    },
  },
})
