<template>
    <div class="bg-slate-200 py-3">
        <div class="">
            <div class="flex justify-end items-center _container gap-3">
                <img src="../../../public/images/test.jpg" alt="" class="w-[40px] h-[40px] object-cover rounded-full" />
                <button @click="toggleStatus" class="font-semibold">Admin</button>
                <div v-if="buttonStatus == true">
                    <p class="text-3xl bg-red-500">Test component</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const buttonStatus = ref(false);

const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
}
</script>