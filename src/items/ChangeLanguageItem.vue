<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import {ref, watchEffect} from 'vue'
  import { focusAndBlur } from '@/assets/js/focusAndBlur'
  import FrenchFlag from "@/items/FrenchFlag.vue"
  import UsaFlag from "@/items/UsaFlag.vue"

  const { t, locale } = useI18n()
  let selectedLanguage = locale.value === 'en' ? t("nav.lang.en") : t("nav.lang.fr")
  let showLanguages = ref(false)

  const handleClick = () => {
    focusAndBlur("changeLanguage", 300)
    showLanguages.value = !showLanguages.value
  }

  const changeLanguage = (lang: string) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
    selectedLanguage = locale.value === 'en' ? t("nav.lang.en") : t("nav.lang.fr")
    showLanguages = ref(!showLanguages)
  }

  watchEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang) {
      locale.value = lang
    }
  })
</script>

<template>
  <div class="relative">
    <button id="changeLanguage" @click="handleClick"
            class="flex items-center gap-2 px-4 py-2 bg-purple rounded-full text-lg transition-all ease-in-out duration-500 
            focus:bg-purple-dark md:hover:bg-purple-dark">
      <UsaFlag v-if="locale === 'en'" />
      <FrenchFlag v-else />
      {{ selectedLanguage }}
    </button>

    <ul v-if="showLanguages" class="dropdown-content absolute mt-2 px-6 py-2 left-1/2 -translate-x-1/2 rounded-lg shadow-lg bg-purple text-lg">
      <li class="mb-2">
        <button class="relative flex items-center gap-2 after:rounded-md after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0
        after:left-0 hover:after:w-full after:transition-all after:duration-300 disabled:opacity-60 disabled:hover:after:hidden"
                @click="changeLanguage('en')" :disabled="locale === 'en'">
          <UsaFlag />
          {{ t("nav.lang.en") }}
        </button>
      </li>

      <li class="mt-2">
        <button class="relative flex items-center gap-2 after:rounded-md after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0
        after:left-0 hover:after:w-full after:transition-all after:duration-300 disabled:opacity-60 disabled:hover:after:hidden"
                @click="changeLanguage('fr')" :disabled="locale === 'fr'">
          <FrenchFlag />
          {{ t("nav.lang.fr") }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Style par défaut : menu s'ouvre vers le bas */
.dropdown-content::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #8F00FF transparent;
}
</style>