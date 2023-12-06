<script setup lang="ts">
import type { ProjectProps } from "~/types";

defineProps({
    project: {
        type: Object as PropType<ProjectProps>,
        required: true,
    },
})
</script>

<template>
    <UCard class="shadow-none">
        <h1 class="text-2xl font-bold mb-3">
            {{ project.name }}
        </h1>
        <p>
            {{ project.description }}
        </p>
        <div class="flex justify-between flex-wrap mt-8 items-end">
            <div>
                <UBadge v-for="tag in project.tags" :key="tag" class="mt-3 mr-2" :label="tag" color="gray" />
            </div>
            <div class="flex gap-4 items-center mt-5 sm:mt-0">
                <UButton v-show="project.github" icon="i-simple-icons-github" variant="ghost" :to="project.github"
                    target="_blank" />
                <UButton v-show="project.website" label="Visit Website" color="black" :to="project.website"
                    target="_blank" />
            </div>
        </div>
    </UCard>
</template>


