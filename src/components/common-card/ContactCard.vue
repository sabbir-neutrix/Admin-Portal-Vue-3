<template>
    <div v-for="(category, index) in categories" :key="index"
        class="border rounded-md overflow-hidden bg-slate-100">
        <div class="flex justify-between items-center p-3">
            <div class="w-[70%]">
                <p class="text-base md:text-xl font-semibold line-clamp-2">{{ category.title }}</p>
                <p class="text-sm md:text-base font-medium leading-5 mb-1 md:mb-2 line-clamp-2">{{ category.description }}</p>
                <p class="text-xs md:text-sm leading-5 line-clamp-2">{{ category.additionalInfo }}</p>
            </div>
            <div class="w-[30%]">
                <img :src="category.image" alt="" class="w-[70px] h-[70px] object-cover rounded-full" />
            </div>
        </div>
        <div class="flex justify-end items-center gap-2 mt-3 bg-slate-300 px-3 py-2">
                <!-- <button class="bg-slate-400 text-white font-medium rounded-full px-5 py-1">Edit</button>
                <button class="bg-red-600 text-white font-medium rounded-full px-5 py-1">Delete</button> -->
                <button class="bg-slate-600 text-white px-[6px] py-[3px] rounded text-sm"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                <button class="bg-slate-600 text-white px-[6px] py-[3px] rounded text-sm"><font-awesome-icon icon="fa-solid fa-eye" /></button>
                <button class="bg-slate-600 text-white px-[6px] py-[3px] rounded text-sm"><font-awesome-icon icon="fa-solid fa-trash" /></button>
            </div>
    </div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown,faPenToSquare,faEye,faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown,faPenToSquare,faEye,faTrash)
const props = defineProps({
    categories: {
        type: Object,
        required: true
    }
});
</script>