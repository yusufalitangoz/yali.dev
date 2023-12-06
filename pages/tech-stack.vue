<script setup lang="ts">
import type { TechStackGroupProps } from "@/types/tech-stack";

const techStackGroups: TechStackGroupProps[] = [
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
    <div class="mt-14">
        <div class="flex flex-col gap-10">
            <div v-for="group in techStackGroups" :key="group.title">
                <h2 class="text-xl font-bold mb-5">{{ group.title }}</h2>
                <div class="flex flex-wrap gap-5">
                    <UBadge variant="solid" color="white" v-for="item in group.items" :key="item">
                        {{ item }}
                    </UBadge>
                </div>
            </div>
        </div>
    </div>
</template>
