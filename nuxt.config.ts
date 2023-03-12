// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || "0.0.0.0",
  },

  ssr: Boolean(process.env.SRR_MODE),

  plugins: [
    { src: "~/plugins/api-services.ts" },
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
