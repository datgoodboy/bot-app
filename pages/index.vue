<template>
  <div class="min-h-screen flex flex-col justify-center">
    <p class="text-center">
      <strong>Nuxt.js</strong>
      <span>{{ appModule.user }}</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '~/store/appModule'

const appModule = useAppStore()
</script>
2
