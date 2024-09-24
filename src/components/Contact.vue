<script setup lang="ts">
import ContactCard from '@/items/ContactCard.vue'
</script>

<template>
  <section class="h-[75vh]" id="contact">
    <h2 class="text-3xl text-center md:my-5">{{ $t("contact.title") }}</h2>

    <div class="flex flex-col h-full mt-10 gap-4 md:gap-10 w-5/6 items-center md:flex-row md:justify-center lg:w-3/4 md:h-1/2 mx-auto">
      <ContactCard link-to="https://www.linkedin.com/in/enzo-vullo-9188a631b" :icon="['fab', 'linkedin']">{{ $t("contact.linkedin") }}</ContactCard>
      <ContactCard link-to="mailto:enzo.vullo@proton.me" :icon="['fas', 'envelope-circle-check']">{{ $t("contact.mail") }} enzo.vullo@proton.me ! </ContactCard>
    </div>
  </section>
</template>
