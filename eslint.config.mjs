// ESLint-Konfiguration
//
// HINWEIS: Falls Sie die Nuxt-ESLint-Integration nutzen möchten
// (import withNuxt from './.nuxt/eslint.config.mjs'), müssen Sie
// zuerst `npx nuxi prepare` ausführen. Die Konfiguration unten
// funktioniert auch ohne diesen Schritt.

import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    ignores: ['.nuxt/', '.output/', 'dist/', 'node_modules/']
  }
]
