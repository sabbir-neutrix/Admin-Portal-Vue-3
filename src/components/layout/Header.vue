<template>
    <div class="bg-slate-200 py-3">
        <div>
            <div class="flex justify-end items-center _container gap-3">
                <img src="../../../public/images/demo.jpg" class="w-[40px] h-[40px] object-cover rounded-full"/>
                <div class="relative">
                    <button @click="modal = true" v-on-click-outside="closeModal" class="font-semibold">Admin</button>
                    <div v-if="modal" class="absolute top-[40px] left-[-150px] bg-white border rounded-md drop-shadow overflow-hidden z-20 w-[200px]">
                        <div>
                            <button class="text-start p-2 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">Profile</button>
                            <button class="text-start p-2 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">Change Password</button>
                            <button class="text-start p-2 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { vOnClickOutside } from '@vueuse/components';

/* On Click Outside Event */
const modal = ref(false);

const closeModal = () => {
    modal.value = false;
    console.log("Close modal: ", modal.value);
}

/* Dropdown Menu Event */
const buttonStatus = ref(false);

const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
}
</script>