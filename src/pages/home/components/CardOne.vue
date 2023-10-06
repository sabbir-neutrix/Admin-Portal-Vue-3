<template>
    <div v-for="(item, index) in cardOneData" :key="index" class="bg-pc p-4 rounded-md cursor-pointer text-center text-white">
        <div class="mb-4">
            <button class="bg-slate-400 px-4 py-[13px] text-4xl rounded-full text-white relative"><font-awesome-icon :icon="item.icon"/>
                <p class="absolute top-[-5px] right-[0px] bg-red-600 text-white rounded-full h-[20px] w-[20px] text-xs font-medium">12</p>
            </button>
        </div>
        <p class="font-semibold text-xl mb-1">{{ item.title }}</p>
        <p class="text-xs font-medium">{{ item.subTitle }}</p>
    </div>
</template>

<script setup>
    const props = defineProps(['cardOneData']);
</script>