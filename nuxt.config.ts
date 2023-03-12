
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: 'preconnect', href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap", rel: "stylesheet" }
      ]
    }
  },
  devServer: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || "0.0.0.0",
  },

  ssr: Boolean(process.env.SRR_MODE),

  plugins: [
    { src: "~/plugins/vue-toastificaton.client.ts", mode: "client" },
  ],

  css: ["~/assets/sass/main.scss"],

  modules: ["@nuxtjs/i18n", 'bootstrap-vue-next/nuxt'],

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
    ],
    lazy: true,
    langDir: "utils/i18n",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "en",
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || "",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/sass/abstracts/variables.scss";\n@import "@/assets/sass/abstracts/mixin.scss";\n',
        },
      },
    },
  },
});
