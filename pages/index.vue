<script lang="ts">
import type { SocialProps } from '@/types/about';

const socials: SocialProps[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/yusufalitangoz',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yusufalitangoz',
    },
    {
        name: 'Email',
        url: 'mailto:tangozyusufali@gmail.com',
    }
]

export default {
    data() {
        return {
            socials,
        };
    },
};

</script>

<template>
    <div class="mt-36">
        <div>
            <h1 class="text-3xl font-bold mb-3">
                Hello There! 👋
            </h1>
            <p class="text-lg">
                I'm Yusuf Ali, a Front-End Developer from Istanbul, Türkiye.
            </p>
        </div>
        <div class="mt-14 flex flex-wrap gap-5">
            <UButton v-for="social in  socials" :key="social.name" :label="social.name" :to="social.url" target="_blank" />
        </div>
    </div>
</template>