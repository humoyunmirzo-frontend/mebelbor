import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { VueMaskDirective } from 'v-mask'
import { defaultConfig, plugin } from '@formkit/vue'

// import Previewer from 'virtual:vue-component-preview'
import { routes } from 'vue-router/auto/routes'
import VueNumerals from 'vue-numerals'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const vMaskV2 = VueMaskDirective
const vMaskV3 = {
  beforeMount: vMaskV2.bind,
  updated: vMaskV2.componentUpdated,
  unmounted: vMaskV2.unbind,
}
// const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
    ctx.app.use(VueNumerals, {
      locale: 'fr',
    })
    ctx.app.use(plugin, defaultConfig())
    ctx.app.directive('mask', vMaskV3)
  },
)
