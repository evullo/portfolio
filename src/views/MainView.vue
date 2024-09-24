<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
import NavbarMobile from "@/components/NavbarMobile.vue"
import Home from "@/components/Home.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"
import NextSectionButton from "@/items/NextSectionButton.vue"

import { ref, onMounted, onUnmounted } from "vue"

const isMobile = ref(false)
const sections = ref<HTMLElement[] | null>(null)
const main = ref<HTMLElement | null>(null)

const checkIfMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches
}

onMounted(() => {
  sections.value = main.value ? Array.from(main.value.children) as HTMLElement[] : null
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<template>
  <component :is="isMobile ? NavbarMobile : Navbar" />

  <main ref="main">
    <Home />
    <Skills />
    <Contact />
  </main>

  <NextSectionButton :sections="sections" />
</template>
