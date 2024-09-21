<script setup lang="ts">
import ContactCard from '@/items/ContactCard.vue'

const linkedInIcon = ["fab", "linkedin"]
const mailIcon = ["fas", "envelope-circle-check"]
</script>

<template>
  <section class="h-dvh" id="contact">
    <h2 class="text-3xl text-center md:my-5">{{ $t("contact.title") }}</h2>

    <div class="flex flex-col h-full mt-10 gap-4 md:gap-10 w-5/6 items-center md:flex-row md:justify-center lg:w-3/4 md:h-1/2 mx-auto">
      <ContactCard link-to="www.linkedin.com/in/enzo-vullo-9188a631b" :icon="linkedInIcon">{{ $t("contact.linkedin") }}</ContactCard>
      <ContactCard link-to="mailto:enzo.vullo@proton.me" :icon="mailIcon">{{ $t("contact.mail") }} enzo.vullo@proton.me ! </ContactCard>
    </div>
  </section>
</template>
