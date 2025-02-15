<template>
  <form @submit.prevent="submit">
    <fieldset>
      <legend>{{ currActionLabel }}</legend>
      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="form.email"
          placeholder="your email"
        />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          autocomplete
          type="password"
          v-model="form.password"
          placeholder="Your password. Leave empty for password-less login"
        />
      </div>
      <div class="field poles-apart">
        <Button type="submit" variant="primary">{{ currActionLabel }}</Button>

        <div class="text-right">
          <small class="block">{{
            isSignIn ? `not a member?` : `already a member?`
          }}</small>
          <a href="" title="Sign Up" @click.prevent="switchAuthMode()">{{
            isSignIn ? `Sign Up!` : `Sign In`
          }}</a>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useNuxtApp } from 'nuxt/app'

type UserCredentials = {
  email: string
  password: string
}

type AuthMode = 'Sign In' | 'Sign Up'
const isSignIn = ref<boolean>(true)
const currActionLabel = ref<AuthMode>('Sign In')
const form = reactive<UserCredentials>({
  email: '',
  password: '',
})
const { $alert } = useNuxtApp()

const { resetOnSubmit, useGithubAuth } = withDefaults(
  defineProps<{
    resetOnSubmit?: boolean
    useGithubAuth?: boolean
  }>(),
  {
    resetOnSubmit: true,
    useGithubAuth: true,
  }
)
const emit = defineEmits<{
  (e: 'submit', formData: any, isSignIn: boolean): void
}>()

const switchAuthMode = () => (isSignIn.value = !isSignIn.value)
watch(
  isSignIn,
  (isSignIn) => (currActionLabel.value = isSignIn ? `Sign In` : `Sign Up`)
)

const submit = () => {
  // BYOV - Bring your own validation!
  if (!form.email || !form.password) {
    $alert({
      type: 'error',
      text: 'Please fill-in both the <strong>email</strong> and the <strong>password</strong>!',
    })
    return
  }
  if (!form.email.match(/^\S+@\S+$/)) {
    $alert({
      type: 'error',
      text: 'Please fill-in a valid <strong>email</strong> address!',
    })
    return
  }
  if (form.password.length <= 6) {
    $alert({
      type: 'error',
      text: '<strong>Password</strong> must be at-least 6 chars!',
    })
    return
  }
  const { email, password } = form
  emit('submit', { email, password }, isSignIn.value)
  if (resetOnSubmit) {
    form.email = ''
    form.password = ''
  }
}
</script>

<style lang="postcss">
form {
  @apply w-full bg-gray-50 px-10 py-8 rounded-md shadow-md;
}
legend {
  @apply text-purple-600 pb-4 text-4xl border-b mb-4;
}
.field {
  @apply w-full mb-6;
}
label {
  @apply block uppercase font-semibold text-gray-600 text-base;
}
input {
  @apply w-full font-normal border py-2 px-4 text-gray-700 hover:bg-gray-50 focus:border-indigo-500 rounded-md focus:outline-none;
}
.poles-apart {
  @apply flex justify-between items-center;
}
</style>
