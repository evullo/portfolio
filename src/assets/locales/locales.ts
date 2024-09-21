import { createI18n } from "vue-i18n"

import en from './en.json'
import fr from './fr.json'

export const locales = createI18n({
  warnHtmlInMessage: "off",
  legacy: false,
  locale: localStorage.getItem("lang") || "fr",
  fallbackLocale: "en",
  messages: {
    en: en,
    fr: fr
  },
})