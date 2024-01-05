<script setup lang="ts">
import type { SocialProps } from "~/types";

const socials: SocialProps[] = [
  {
    icon: "i-simple-icons-github",
    name: "GitHub",
    url: "https://github.com/yusufalitangoz",
  },
  {
    icon: "i-simple-icons-linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yusufalitangoz",
  },
  {
    icon: "i-simple-icons-maildotru",
    name: "Email",
    url: "mailto:tangozyusufali@gmail.com",
  },
];
</script>

<template>
  <div class="mt-36 text-center">
    <div>
      <h1 class="text-3xl font-bold mb-3">Hello,</h1>
      <p class="text-lg">
        I'm Yusuf Ali, a Front-End Developer from Istanbul, Türkiye.
      </p>
    </div>
    <div class="mt-14 flex flex-wrap justify-center gap-5">
      <UButton
        v-for="{ icon, name, url } in socials"
        target="_blank"
        variant="ghost"
        :icon="icon"
        color="gray"
        :key="name"
        :to="url"
      />
    </div>
  </div>
</template>
