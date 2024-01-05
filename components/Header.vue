<script setup lang="ts">
import type { LinkProps } from "~/types";

const isOpen = ref<boolean>(false);
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const links: LinkProps[] = [
  { label: "About", href: "/" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Projects", href: "/projects" },
];
</script>

<template>
  <header class="flex items-center py-4">
    <p class="text-lg font-semibold">yali.dev</p>
    <div class="flex gap-2 sm:gap-5 ml-auto items-center">
      <ULink
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        v-for="{ href, label } in links"
        class="hidden sm:flex text-sm"
        active-class="text-primary"
        :key="href"
        :to="href"
      >
        {{ label }}
      </ULink>
      <UButton
        icon="i-heroicons-bars-2-20-solid"
        @click="isOpen = !isOpen"
        class="sm:hidden"
        variant="ghost"
        color="gray"
      />
      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          @click="isDark = !isDark"
          variant="ghost"
          color="gray"
        />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
    </div>
  </header>
  <USlideover v-model="isOpen" :ui="{ base: 'p-5 block' }">
    <UButton
      icon="i-heroicons-x-mark-20-solid"
      @click="isOpen = false"
      variant="ghost"
      class="-my-1"
      color="gray"
    />
    <UButton
      @click="isOpen = false"
      v-for="{ href, label } in links"
      class="mt-4 w-full"
      variant="link"
      :label="label"
      :key="href"
      :to="href"
      size="lg"
    />
  </USlideover>
</template>
