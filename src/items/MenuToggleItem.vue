<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['toggle'])
const props = defineProps({
  open: Boolean
})

const openState = ref(props.open)

const toggleMenu = (forceClose: boolean | null = null) => {
  openState.value = forceClose !== null ? forceClose : !openState.value
  emit('toggle', openState.value)
}

watch(
  () => props.open,
  (newValue) => {
    openState.value = newValue
  }
)

defineExpose({ toggleMenu })
</script>

<template>
    <button class="z-50 w-14 h-14 relative rounded-md" @click="toggleMenu()">
    <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
        :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
      ></span>
      <span
        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
        :class="{ 'opacity-0': open }"
      ></span>
      <span
        class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
        :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
      ></span>
    </div>
  </button>

  <Transition name="slide">
    <div
      v-show="open"
      class="bg-black block absolute z-40 w-1/2 h-[97vh] top-3 drop-shadow-md rounded-r-md"
    ></div>
  </Transition>

  <div
    v-show="open"
    @click="toggleMenu()"
    class="fixed top-0 left-0 w-full h-dvh bg-black opacity-50 z-40"
  ></div>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>