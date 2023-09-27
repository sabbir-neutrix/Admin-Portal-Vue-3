<template>
    <div class="drop-shadow bg-white p-4 md:p-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex justify-start items-center gap-3 mb-6 md:mb-0">
            <p class="text-xs md:text-sm font-semibold">Home</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Service List</p>
        </div>
        <div class="">
            <router-link to="/add-service" class="text-sm md:text-base font-medium px-4 md:px-6 py-2 md:py-4 bg-slate-400 text-white rounded-md">+ Add New Service</router-link>
        </div>
      </div>
        <hr class="my-6 md:my-10 border-b-2" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardWithoutImage :employees="employees"></CardWithoutImage>
        </div>
    </div>
</template>
<script setup>
import CardWithoutImage from "../../components/common-card/CardWithoutImage.vue";
const employees = [
    {
        sl:1,
        name:'Test',
        email:'test@gmail.com',
        phone:'1234567'
    },
    {
        sl:2,
        name:'Test',
        email:'test@gmail.com',
        phone:'1234567'
    },
    {
        sl:3,
        name:'Test',
        email:'test@gmail.com',
        phone:'1234567'
    },
    {
        sl:4,
        name:'Test',
        email:'test@gmail.com',
        phone:'1234567'
    },
    {
        sl:5,
        name:'Test',
        email:'test@gmail.com',
        phone:'1234567'
    },
]
</script>