<script setup lang="ts">
import NavItem from "@/items/NavItem.vue";
import ChangeLanguageItem from "@/items/ChangeLanguageItem.vue";

window.onscroll = function() {
  const nav = document.getElementById('head')

  if (!nav) return

  if (window.scrollY > 0) {
    nav.classList.add('backdrop-blur-md')
  } else {
    nav.classList.remove('backdrop-blur-md')
  }
}
</script>

<template>
  <header id="head" class="z-20 flex flex-wrap justify-between items-center fixed top-0 w-full">
    <nav class="flex flex-grow gap-6 p-2 items-center">
      <img class="w-12" src="../assets/img/logo.png" alt="logo">
      <ul class="flex gap-6 items-center">
        <NavItem link-to="home">{{ $t("nav.home") }}</NavItem>
        <NavItem link-to="skills">{{ $t("nav.skills") }}</NavItem>
        <NavItem link-to="contact">{{ $t("nav.contact") }}</NavItem>
      </ul>
    </nav>

    <div class="relative px-6 w-fit">
      <ChangeLanguageItem />
    </div>

    <hr class="bg-gray-900 opacity-50 flex-grow-0 flex-shrink-0 basis-full -z-10">
  </header>
</template>
