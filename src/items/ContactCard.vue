<script setup lang="ts">
import type { ContactCardProps } from '@/types/types'

defineProps<ContactCardProps>()
</script>

<template>
    <a :href="linkTo" target="_blank"
        class="w-full md:h-full flex flex-row px-4 py-2 md:flex-col justify-between items-center bg-purple rounded-md md:w-1/4 transition-all ease-in-out duration-500 focus:bg-purple-dark md:hover:bg-purple-dark">
        <font-awesome-icon class="h-16 md:h-32 md:mt-auto" :icon="icon" />
        <p class="text-center text-lg my-auto md:mb-10"><slot></slot></p>
    </a>
</template>