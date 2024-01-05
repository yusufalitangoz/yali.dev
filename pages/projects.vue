<script setup lang="ts">
import ProjectsClient from "~/clients/projects";

const client = new ProjectsClient();
const projects = await client.get();
</script>

<template>
  <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
    <ProjectCard v-for="(project, i) in projects" :key="i" :project="project" />
  </div>
</template>
