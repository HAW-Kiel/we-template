// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app/',

  modules: [
    '@nuxt/eslint'
  ],

  // Supabase-Verbindung über Environment-Variablen
  // Erstellen Sie eine .env-Datei (siehe .env.example)
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
    }
  },

  devtools: { enabled: true }
})
