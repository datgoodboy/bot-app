<template>
  <div class="min-h-screen flex justify-center">
    <div class="cont mt-28">
      <LoginForm @submit="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Auth from '../domain/Auth/Auth'
import { useNuxtApp } from 'nuxt/app'
import { useAppStore } from '~/store/appModule'

const appModule = useAppStore()
const { $alert, $axios } = useNuxtApp()
const router = useRouter()
const loading = ref<boolean>(false)

const onSubmit = async (
  formData: { email: string; password: string },
  isSignIn: boolean
) => {
  try {
    loading.value = true
    const data = await appModule.login(formData)
    loading.value = false
    if (data && data.accessToken) {
      $alert({ type: 'success', text: 'Logging you in shortly....' })
      return router.push('/')
    } else {
      return $alert({
        type: 'success',
        text: 'Please check your inbox to activate your account!',
      })
    }
  } catch (error) {
    if (error) {
      return $alert({ type: 'error', text: error.message })
    }
  }
}
</script>
<style lang="postcss">
.cont {
  @apply w-full sm:w-3/4 md:w-8/12 lg:w-6/12 xl:w-4/12;
}
</style>
