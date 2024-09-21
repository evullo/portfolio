<script setup lang="ts">
import Title from "@/items/Title.vue";
import Paragraph from "@/items/Paragraph.vue";
import DownloadCvButton from "@/items/DownloadButton.vue";
import LinkButton from "@/items/LinkButton.vue";
</script>

<template>
    <section class="h-dvh mt-20" id="home">
      <div class="relative h-full flex flex-col md:flex-row xl:mt-20 xl:w-2/3 xl:mx-auto">
        <div class="absolute z-10 flex flex-col items-start ml-5 md:items-end md:text-right h-fit md:w-1/2 md:top-1/3 top-[40%]">
          <Title>Enzo Vullo</Title>
          <Paragraph class="mt-5" v-html="$t('home.description')"></Paragraph>

          <div class="flex flex-col md:flex-row md:gap-4 flex-nowrap">
            <DownloadCvButton class="mt-5">{{ $t('home.download') }}</DownloadCvButton>
            <LinkButton class="mt-5" link="#" icon="fa-solid fa-link">{{ $t('home.view') }}</LinkButton>
          </div>
        </div>

        <div class="h-96 w-4/5 md:w-2/3 mt-20 xl:mt-28 ml-auto relative z-0 md:h-fit md:translate-x-1 overflow-hidden">
            <div class="absolute bottom-0 md:top-0 left-0 md:w-2/3 w-full h-2/3 md:h-full bg-gradient-to-t md:bg-gradient-to-r from-black rounded-bl-md md:rounded-l-md"></div>
            <img src="@/assets/img/me3.jpeg" alt="profile picture" class="w-full h-full object-cover rounded-l-md" />
        </div>
      </div>
    </section>
</template>
