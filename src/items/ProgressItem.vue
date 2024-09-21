<script setup lang="ts">
import type {ProgressProps} from "@/types/types"

const props = defineProps<ProgressProps>()
</script>

<template>
  <div class="bg-purple p-2 rounded-md">
    <div class="relative aspect-square container-type">
      <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <g class="origin-center transform -rotate-[90deg]">
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-text-white"
                  stroke-linecap="round" stroke-width="1" stroke-dasharray="100"
                  :stroke-dashoffset="100 - props.percentage + 2"></circle>
        </g>
        <g class="origin-center transform -scale-x-100 rotate-[82deg]">
          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-purple-dark"
                  stroke-linecap="round" stroke-width="1" stroke-dasharray="100"
                  :stroke-dashoffset="props.percentage + 2"></circle>
        </g>
      </svg>

      <font-awesome-icon
          :icon="props.icon"
          class="text-text-white absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[40cqw]" />
    </div>

    <p class="mt-2 text-center text-sm">{{props.title}}</p>
  </div>
</template>
