<template>
    <div v-for="(category, index) in categories" :key="index" class="flex justify-between items-center border rounded-md p-3">
        <div class="w-[30%]">
            <img :src="category.image" alt="" class="w-[70px] h-[70px] object-cover rounded-full"/>
        </div>
        <div class="w-[70%]">
            <p class="text-base md:text-xl font-semibold line-clamp-2">{{ category.title }}</p>
            <p class="text-sm md:text-base font-medium leading-5 mb-1 md:mb-2 line-clamp-2">{{ category.description }}</p>
            <p class="text-xs md:text-sm leading-5 line-clamp-2">{{ category.additionalInfo }}</p>
            <div class="flex justify-start items-center gap-2 mt-3">
                <button class="bg-slate-400 text-white font-medium rounded-full px-5 py-1">Edit</button>
                <button class="bg-red-600 text-white font-medium rounded-full px-5 py-1">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    categories: {
        type: Object,
        required: true
    }
});
</script>