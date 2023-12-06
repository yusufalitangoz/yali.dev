<script setup lang="ts">
import ProjectsClient from "~/clients/projects";

const client = new ProjectsClient();

const projects = await client.get()
</script>

<template>
    <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
        <USkeleton v-show="!projects" class="w-full h-48" v-for="i in 6" :key="i" />
    </div>
</template>

