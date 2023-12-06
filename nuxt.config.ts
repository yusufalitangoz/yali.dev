export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI,
  },
});
