<template>
    <div class="drop-shadow bg-white p-4 md:p-6">
        <div class="flex justify-start items-center gap-3 mb-8">
            <p class="text-xs md:text-sm font-semibold">Home</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Services</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Add Service</p>
        </div>
        <form class="border rounded-md p-4">
            <!-- <button><font-awesome-icon icon="fa-solid fa-user-secret" /> Test</button> -->
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="border-r-0 md:border-r-2 pe-0 md:pe-6">
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Service Name <span class="text-red-600">*</span></p>
                        <input type="text" class="outline-none border w-full p-2 rounded-md" />
                    </div>
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Service Title <span class="text-red-600">*</span></p>
                        <input type="text" class="outline-none border w-full p-2 rounded-md" />
                    </div>
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Service Title <span class="text-red-600">*</span></p>
                        <input type="text" class="outline-none border w-full p-2 rounded-md" />
                    </div>
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Service Title <span class="text-red-600">*</span></p>
                        <input type="text" class="outline-none border w-full p-2 rounded-md" />
                    </div>
                </div>
                <div class="ps-0 md:ps-6">
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Short Description <span class="text-red-600">*</span></p>
                        <textarea class="outline-none border w-full p-2 rounded-md" rows="7" />
                    </div>
                    <div class="mb-3 md:mb-6">
                        <p class="mb-2">Long Description <span class="text-red-600">*</span></p>
                        <textarea class="outline-none border w-full p-2 rounded-md" rows="7" />
                    </div>
                </div>
            </div>
            <!-- <div class="border rounded-md p-4">
                <div class="mb-3 md:mb-6">
                    <p class="mb-2">Upload Image <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md"/>
                </div>
                <div class="mb-3 md:mb-6">
                    <p class="mb-2">Upload Icon <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md"/>
                </div>
                <div class="">
                    <p class="mb-2">Upload Employee Images (Max Limit: 4) <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md" multiple/>
                </div>
            </div> -->
            <button class="bg-slate-400 text-white p-2 w-full rounded-md mt-6">Add Service</button>
        </form>
    </div>
</template>
<script setup>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret,faChevronDown } from '@fortawesome/free-solid-svg-icons'
// library.add(faUserSecret,faChevronDown)
</script>
