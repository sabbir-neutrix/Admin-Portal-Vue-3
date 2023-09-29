<template>
    <div v-for="(cardThreeData, index) in cardThreeData" :key="index" :class="cardThreeData.background" class="rounded-md cursor-pointer p-2 flex justify-start gap-2 m-2 text-white">
        <div>
            <button class="py-1 md:py-2 px-2 md:px-4 text-2xl text-white"><font-awesome-icon :icon="cardThreeData.icon" /></button>
        </div>
        <div>
            <p class="mb-1 font-semibold">{{ cardThreeData.title }}</p>
            <p class="font-medium">{{ cardThreeData.subTitle }}</p>
        </div>

    </div>
</template>
<script setup>
const props = defineProps(['cardThreeData']);
</script>