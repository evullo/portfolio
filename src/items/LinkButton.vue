<script setup lang="ts">
import type {LinkButtonProps} from "@/types/types"
import { focusAndBlur } from "@/assets/js/focusAndBlur"
import { useI18n } from 'vue-i18n'
import {onMounted, ref, watchEffect} from 'vue'

const props = defineProps<LinkButtonProps>()

const { locale } = useI18n()
const cvPath = ref('')

const updateCv = () => {
  if (locale.value === 'en') {
    cvPath.value = '/cv/resume.pdf'
  } else {
    cvPath.value = '/cv/cv.pdf'
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
    <a id="linkToResume" @click='focusAndBlur("linkToResume")' 
      class="flex whitespace-nowrap items-center px-2 gap-2 before:-z-10 before:block before:bg-purple before:rounded-full before:w-11
      before:h-11 before:absolute before:focus:w-full md:before:hover:w-full before:transition-all before:ease-in-out before:duration-500"
      :href="cvPath" target="blank" >
      <font-awesome-icon class="aspect-square p-3 text-text-white rounded-full"
                         :icon="props.icon" size="lg" />
      <slot class="text-left"></slot>
    </a>
  </div>
</template>