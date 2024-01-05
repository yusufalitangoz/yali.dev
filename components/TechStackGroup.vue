<script setup lang="ts">
import type { TechStackGroupProps } from "~/types";

defineProps({
  group: {
    type: Object as PropType<TechStackGroupProps>,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-5">{{ group.title }}</h2>
    <div class="flex flex-wrap gap-5">
      <UBadge
        v-for="item in group.items"
        variant="solid"
        :label="item"
        color="white"
        :key="item"
      />
    </div>
  </div>
</template>
