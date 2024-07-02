import {
  addRouteMiddleware,
  defineNuxtPlugin,
  navigateTo,
  useCookie,
  useRoute,
} from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const excludePaths = ['/login', '/firebase-messaging-sw.js']
  addRouteMiddleware(
    'check-auth',
    () => {
      const accessToken = useCookie('accessToken')
      const route = useRoute()
      const currentPath = route.path
      if (!excludePaths.includes(currentPath) && !accessToken.value) {
        return navigateTo('/login')
      }
    },
    { global: true }
  )
})
