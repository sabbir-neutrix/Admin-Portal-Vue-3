<template>
    <div v-for="(item, index) in cardTwoData" :key="index" class="bg-pc rounded-md cursor-pointer p-2 flex justify-start gap-2 text-white drop-shadow">
        <div :class="item.background" class="rounded-md drop-shadow">
            <button class="py-1 md:py-2 px-2 md:px-4 text-2xl text-white"><font-awesome-icon :icon="item.icon"/></button>
        </div>
        <div>
            <p class="mb-1 font-semibold text-sm md:text-base">{{ item.title }}</p>
            <p class="font-medium text-sm md:text-base">{{ item.quantity }}</p>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['cardTwoData']);
</script>