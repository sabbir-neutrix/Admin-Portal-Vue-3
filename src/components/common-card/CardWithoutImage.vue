<template>
    <div v-for="(item, index) in data" :key="index" class="border rounded-md p-3">
        <div class="flex justify-between items-center mb-4">
            <div>
                <p class="font-semibold">Sl</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
            </div>
            <div class="text-end">
                <p class="font-semibold">{{ index+1 }}</p>
                <p>{{ item.firstName + ' ' + item.lastName }}</p>
                <p>{{ item.email }}</p>
                <p>{{ item.phone }}</p>
            </div>
        </div>
        <div class="flex justify-end items-center gap-3">
            <button class="bg-slate-400 font-medium px-4 py-1 rounded-full text-white">Edit</button>
            <button class="bg-slate-700 font-medium px-4 py-1 rounded-full text-white">View</button>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['data']);
</script>