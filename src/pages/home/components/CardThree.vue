<template>
    <div v-for="(item, index) in cardThreeData" :key="index" :class="item.background" class="rounded-md cursor-pointer p-2 flex justify-start gap-2 m-2 text-white">
        <div>
            <button class="py-1 md:py-2 px-2 md:px-4 text-2xl text-white"><font-awesome-icon :icon="item.icon"/></button>
        </div>
        <div>
            <p class="mb-1 font-semibold">{{ item.title }}</p>
            <p class="font-medium">{{ item.quantity }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['cardThreeData']);
</script>