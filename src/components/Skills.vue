<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import type { ProgressProps } from "@/types/types"
import SkillsListing from "@/items/SkillsListing.vue"

const { t } = useI18n()

const webSkillsList = computed<ProgressProps[]>(() => [
  {title: "HTML", percentage: 90, icon: "fa-brands fa-html5"},
  {title: "CSS", percentage: 90, icon: "fa-brands fa-css3"},
  {title: "JS", percentage: 70, icon: "fa-brands fa-js"},
])

const frameworkSkillsList = computed<ProgressProps[]>(() => [
  {title: "React", percentage: 70, icon: "fa-brands fa-react"},
  {title: "Vue", percentage: 60, icon: "fa-brands fa-vuejs"},
])

const backEndSkillsList = computed<ProgressProps[]>(() => [
  {title: "Java", percentage: 80, icon: "fa-brands fa-java"},
  {title: "C#", percentage: 70, icon: "fa-brands fa-microsoft"},
  {title: "SQL", percentage: 80, icon: "fas fa-database"},
])

const softSkillsList = computed<ProgressProps[]>(() => [
  {title: t("skills.en"), percentage: 70, icon: "fas fa-language"},
  {title: t("skills.fr"), percentage: 100, icon: "fas fa-language"},
])
</script>

<template>
  <section class="h-dvh w-full md:w-2/3 mx-auto" id="skills">
    <div class="flex flex-col ml-5 gap-4 my-4 md:ml-0 md:flex-row md:my-20">
      <SkillsListing :skills=webSkillsList>Web</SkillsListing>
      <SkillsListing :skills=frameworkSkillsList>Frameworks</SkillsListing>
    </div>

    <div class="flex flex-col ml-5 gap-4 my-4 md:ml-0 md:flex-row md:my-20">
      <SkillsListing :skills=backEndSkillsList>Back End</SkillsListing>
      <SkillsListing :skills=softSkillsList>Soft</SkillsListing>
    </div>
  </section>
</template>
