// https://nuxt.com/docs/api/configuration/nuxt-config
import type { Nitro } from "nitropack";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  app: {
    head: {
      title: 'Droni.co Movies',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css"}
      ]
    }
  },
  auth: {
    globalAppMiddleware: false,
    provider: {
        type: 'authjs'
    }
  },
  hooks: {
    'nitro:build:before': (nitro: Nitro) => {
        nitro.options.moduleSideEffects.push('reflect-metadata')
    }
  },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true
          }
        }
      }
    }
  }
})
