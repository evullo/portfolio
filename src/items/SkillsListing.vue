<script setup lang="ts">
import type { SkillsProps } from '@/types/types'
import ProgressItem from '@/items/ProgressItem.vue'

defineProps<SkillsProps>()
</script>

<template>
    <div class="flex flex-col w-fit md:mx-auto">
      <h2 class="text-xl">
        <slot></slot>
      </h2>
      <ul class="flex flex-row gap-4 mt-5 mx-5 md:mx-10">
        <li v-for="item in skills">
          <ProgressItem class="w-16 md:w-20" :title=item.title :percentage=item.percentage :icon=item.icon></ProgressItem>
        </li>
      </ul>
    </div>
</template>