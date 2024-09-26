<script setup lang="ts">
import type { ContactCardProps } from '@/types/types'

defineProps<ContactCardProps>()
</script>

<template>
    <a :href="linkTo" target="_blank"
        class="w-full md:w-1/2 flex flex-row px-4 py-2 justify-center items-center bg-purple rounded-md transition-all ease-in-out duration-500 focus:bg-purple-dark md:hover:bg-purple-dark">
        <font-awesome-icon class="h-12 md:h-8 md:mt-auto" :icon="icon" />
        <p class="text-center text-lg ml-4 my-auto"><slot></slot></p>
    </a>
</template>