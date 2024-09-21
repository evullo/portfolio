<script setup lang="ts">
import ChangeLanguageItem from '@/items/ChangeLanguageItem.vue';
import MenuToggleItem from '@/items/MenuToggleItem.vue'
import NavItem from '@/items/NavItem.vue';
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const isMenuOpen = ref(false)
const menuBackground = ref<ComponentPublicInstance<InstanceType<typeof MenuToggleItem>> | null>(
  null
)

const handleToggle = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
}

const closeMenu = () => {
  isMenuOpen.value = false
  if (menuBackground.value) {
    menuBackground.value.toggleMenu(false)
  }
}
</script>

<template>
    <header id="head" class="z-20 fixed top-0 w-full">
        <nav class="flex justify-between items-center">
            <MenuToggleItem ref="menuBackground" :open="isMenuOpen" @toggle="handleToggle"></MenuToggleItem>

            <Transition name="slide-fade">
                <ul v-show="isMenuOpen" class="mt-20 mx-2 z-50 absolute w-44 h-screen top-0 flex flex-col gap-6">
                    <NavItem link-to="home" @click="closeMenu" class="mt-5 ml-2">{{ $t("nav.home") }}</NavItem>
                    <NavItem link-to="skills" @click="closeMenu" class="ml-2">{{ $t("nav.skills") }}</NavItem>
                    <NavItem link-to="contact" @click="closeMenu" class="ml-2">{{ $t("nav.contact") }}</NavItem>

                    <ChangeLanguageItem class="mx-auto"></ChangeLanguageItem>
                </ul>
            </Transition>
    
            <img class="w-12 m-4" src="../assets/img/logo.png" alt="logo">
        </nav>
        
        <hr class="bg-gray-900 opacity-50 flex-grow-0 flex-shrink-0 basis-full -z-10">
    </header>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>