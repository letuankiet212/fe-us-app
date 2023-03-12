import initApiServices, { ServiceFactory } from "~~/services";

declare module "#app" {
  interface NuxtApp {
    $services: ServiceFactory;
  }
}

declare module "nuxt/dist/app/nuxt" {
  interface NuxtApp {
    $services: ServiceFactory;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $services: ServiceFactory;
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      services: initApiServices(),
    },
  };
});
