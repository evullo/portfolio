<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {onMounted, ref, watchEffect} from 'vue'
import { focusAndBlur } from '@/assets/js/focusAndBlur'

const { locale } = useI18n()
const cvPath = ref('')
const cvName = ref('')

const updateCv = () => {
  if (locale.value === 'en') {
    cvPath.value = '/cv/resume.pdf'
    cvName.value = 'Enzo Vullo Resume.pdf'
  } else {
    cvPath.value = '/cv/cv.pdf'
    cvName.value = 'Enzo Vullo CV.pdf'
  }
}

watchEffect(() => {
  updateCv()
})

onMounted(() => {
  updateCv()
})
</script>

<template>
  <div class="relative w-fit">
    <a id="downloadCV" @click='focusAndBlur("downloadCV")' 
      class="flex items-center px-2 gap-2 before:-z-10 before:block before:bg-purple before:rounded-full before:w-11
      before:h-11 before:absolute before:focus:w-full md:before:hover:w-full before:transition-all before:ease-in-out before:duration-500"
      :href="cvPath" :download="cvName">
      <font-awesome-icon class="aspect-square p-3 text-text-white rounded-full"
                         icon="fa-solid fa-file-arrow-down" size="lg" />

      <span class="text-left">{{ $t('home.download') }}</span>
    </a>
  </div>
</template>
