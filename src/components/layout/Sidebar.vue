<template>
    <div class="bg-pc text-white">
        <div class="px-4 py-[14px]">
            <h1 class="text-3xl font-semibold">Super Admin</h1>
        </div>
        <hr/>
        <div class="h-[calc(100vh-100px)] overflow-hidden overflow-y-auto p-4">
            <MenuItem></MenuItem>
        </div>
    </div>
</template>

<script setup>
import MenuItem from "../menu/MenuItem.vue";
</script>