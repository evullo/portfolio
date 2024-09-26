<script setup lang="ts">
import ContactCard from '@/items/ContactCard.vue'
import ContactForm from '@/items/ContactForm.vue'
</script>

<template>
  <section class="h-[85vh]" id="contact">
    <div>
      <h2 class="text-3xl text-center md:my-5">{{ $t("contact.title") }}</h2>
  
      <div class="flex flex-col h-full mt-10 gap-4 md:gap-4 w-5/6 items-center lg:w-3/4 md:h-1/2 mx-auto">
        <ContactCard link-to="https://www.linkedin.com/in/enzo-vullo-9188a631b" :icon="['fab', 'linkedin']">{{ $t("contact.linkedin") }}</ContactCard>

        <p class="md:text-md">{{ $t('contact.orMail') }}</p>
        
        <ContactForm></ContactForm>
      </div>
    </div>
  </section>
</template>
