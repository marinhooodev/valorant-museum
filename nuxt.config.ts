// https://nuxt.com/docs/api/configuration/nuxt-config
import { primevue_color_preset, tailwind_color_preset } from './themes';

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
    css: ["~/assets/styles/global.css"],
    primevue: {
        options: {
            theme: {
                preset: primevue_color_preset,
                options: {
                    darkModeSelector: ".dark",
                },
            },
        },
    },
    tailwindcss: {
      config: {
        theme: {
          extend: {
            colors: tailwind_color_preset,
          }
        }
      }
    }
});
