<template>
    <div v-for="(cardTwoData, index) in cardTwoData" :key="index" class="bg-slate-200 rounded-md cursor-pointer p-2 flex justify-start gap-2">
        <div :class="cardTwoData.background">
            <button class="py-1 md:py-2 px-2 md:px-4 text-2xl text-white"><font-awesome-icon :icon="cardTwoData.icon" /></button>
        </div>
        <div>
            <p class="mb-1 font-semibold text-sm md:text-base">{{ cardTwoData.title }}</p>
            <p class="font-medium text-sm md:text-base">{{ cardTwoData.subTitle }}</p>
        </div>

    </div>
</template>
<script setup>
const props = defineProps(['cardTwoData']);
</script>