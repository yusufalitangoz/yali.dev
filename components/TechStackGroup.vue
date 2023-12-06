<script setup lang="ts">
import type { TechStackGroupProps } from "~/types";

defineProps({
    groups: {
        type: Array as PropType<TechStackGroupProps[]>,
        required: true,
    },
})
</script>

<template>
    <div v-for="group in groups" :key="group.title">
        <h2 class="text-xl font-bold mb-5">{{ group.title }}</h2>
        <div class="flex flex-wrap gap-5">
            <UBadge variant="solid" color="white" v-for="item in group.items" :key="item" :label="item" />
        </div>
    </div>
</template>


