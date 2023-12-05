<script setup lang="ts">
import type { LinkProps } from '@/types/header'
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

const links: LinkProps[] = [
    { label: 'About', href: '/' },
    { label: 'Tech Stack', href: '/tech-stack' },
    { label: 'Projects', href: '/projects' },
]

const isOpen = ref(false)

</script>

<template>
    <UContainer class="flex items-center py-4">
        <p class="text-lg font-semibold">yali.dev</p>
        <div class="flex gap-2 sm:gap-5 ml-auto items-center">
            <ULink class="invisible sm:visible text-sm" active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                v-for="link in links" :key="link.href" :to="link.href" :aria-label="link.label">
                {{ link.label }}
            </ULink>
            <UButton class="sm:hidden" icon="i-heroicons-bars-2-20-solid" color="gray" variant="ghost" aria-label="Menu"
                @click="isOpen = !isOpen" />
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>
        </div>

    </UContainer>
    <USlideover v-model="isOpen" :ui="{ base: 'p-5 block' }">
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        <UButton class="mt-4 w-full" size="lg" variant="link" v-for="link in links" :key="link.href" :to="link.href"
            :aria-label="link.label">
            {{ link.label }}
        </UButton>
    </USlideover>
</template>
