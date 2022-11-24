import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-a11y',
    configKey: 'a11y'
  },
  setup (options, nuxt) {
    if (!nuxt.options.dev) return;

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
