<script setup lang="ts">
import type { NavItemProps } from "@/types/types"

const props = defineProps<NavItemProps>()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const position = element.getBoundingClientRect().top
    window.scrollTo({top: position + window.scrollY - 80, behavior: 'smooth'})
  }
}
</script>

<template>
  <li class="cursor-pointer opacity-80 text-xl">
    <button class="relative hover:opacity-100 after:rounded-md after:bg-white after:absolute after:h-0.5 after:w-0
    after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            @click="scrollToSection(props.linkTo)">
      <slot></slot>
    </button>
  </li>
</template>