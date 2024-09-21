<script setup lang="ts">
import type { NextSectionProps } from "@/types/types"

import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { focusAndBlur } from "@/assets/js/focusAndBlur"

const props = defineProps<NextSectionProps>()
const isLastSection = ref(false)
const textToDisplay = ref(0)

const scrollToNextSection = () => {
  focusAndBlur("nextSectionButton")

  let scrolled = false
  if (!props.sections) return

  for (let i = 0; i < props.sections.length; i++) {
    if (!(props.sections[i].getBoundingClientRect().top > 0)) continue

    const section = props.sections[(i + 1) % props.sections.length]
    const position = section.getBoundingClientRect().top
    window.scrollTo({top: position + window.scrollY - 80, behavior: 'smooth'})
    scrolled = true
    break
  }

  if (!scrolled) {
    const firstSection = props.sections[0]
    const position = firstSection.getBoundingClientRect().top
    window.scrollTo({top: position + window.scrollY - 80, behavior: 'smooth'})
  }
}

const checkIfLastSection = () => {
  if (!props.sections) return

  for (let i = 0; i < props.sections.length; i++) {
    if (!(props.sections[i].getBoundingClientRect().top > 0)) continue

    textToDisplay.value = i
    break
  }

  const lastSection = props.sections[props.sections.length - 1]
  const lastSectionPosition = lastSection.getBoundingClientRect().top
  isLastSection.value = lastSectionPosition <= window.innerHeight
}

watchEffect(() => {
  checkIfLastSection()
})

onMounted(() => {
  window.addEventListener('scroll', checkIfLastSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkIfLastSection)
})
</script>

<template>
  <div class="relative w-fit">
    <button id="nextSectionButton" @click="scrollToNextSection"
            class="fixed bottom-5 md:bottom-0 px-2 left-1/2 -translate-x-[57.5%] m-4 text-text-white flex items-center animate-pulse
            focus:hover:animate-none before:-z-10 before:ml-0.5 before:block before:bg-purple before:rounded-full before:w-11
            before:h-11 before:absolute before:focus:hover:w-full before:transition-all
            before:ease-in-out before:duration-500">
      <font-awesome-icon v-bind:class="isLastSection ? 'rotate-180' : ''" icon="fa-solid fa-angle-down"
                         class="aspect-square p-3 rounded-full" size="xl" />
      <span class="relative ml-2 whitespace-nowrap">{{ $t("next-button.next[" + textToDisplay + "]") }}</span>
    </button>
  </div>
</template>