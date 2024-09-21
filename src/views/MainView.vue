<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
import NavbarMobile from "@/components/NavbarMobile.vue"
import Home from "@/components/Home.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"
import NextSectionButton from "@/items/NextSectionButton.vue"

import { ref, onMounted, onUnmounted } from "vue"

const isMobile = ref(false)
const sections = ref<HTMLCollection | null>(null)

const checkIfMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches
}

onMounted(() => {
  const main = document.querySelector('main')
  sections.value = main ? main.children : null

  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<template>
  <component :is="isMobile ? NavbarMobile : Navbar" />

  <main>
    <Home />
    <Skills />
    <Contact />
  </main>

  <NextSectionButton :sections="sections" />
</template>
