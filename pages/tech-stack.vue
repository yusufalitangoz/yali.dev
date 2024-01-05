<script setup lang="ts">
import type { TechStackGroupProps } from "~/types";

const groups: TechStackGroupProps[] = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Libraries / Frameworks",
    items: ["React", "Next", "Vue", "Nuxt"],
  },
];
</script>

<template>
  <div class="mt-36">
    <p class="text-lg">
      I'm using these technologies to build web applications.
    </p>
  </div>
  <div class="mt-14 flex flex-col gap-10">
    <TechStackGroup v-for="group in groups" :key="group.title" :group="group" />
  </div>
</template>
