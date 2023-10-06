<template>
    <div class="bg-pc py-3 px-6 flex justify-between md:justify-end items-center text-white">
        <div class="block md:hidden">
            <button @click="drawer = true" class="text-2xl"><font-awesome-icon icon="fa-solid fa-bars"/></button>
            <div v-if="drawer == true" class="absolute top-[0px] left-[0px] bg-pc drop-shadow-lg z-20 h-[100vh] w-[60%]">
                <div class="flex justify-between items-center p-4">
                    <p class="text-xl font-bold">Super Admin</p>
                    <button @click="drawer = false"><font-awesome-icon icon="fa-solid fa-xmark"/></button>
                </div>
                <hr/>
                <div class="p-4">
                    <MenuItem @drawerFlag="handleDrawerData"></MenuItem>
                </div>
            </div>
        </div>
        <div class="flex justify-normal items-center gap-3 me-0 md:me-5">
            <img src="/images/demo.jpg" class="w-[40px] h-[40px] object-cover rounded-full"/>
            <div class="relative">
                <button @click="modal = true" v-on-click-outside="closeModal" class="font-semibold">
                    Admin<span class="ms-4"><font-awesome-icon icon="fa-solid fa-chevron-down"/></span>
                </button>
                <div v-if="modal" class="absolute top-[40px] left-[-120px] bg-white border rounded-md drop-shadow overflow-hidden z-20 w-[200px]">
                    <div>
                        <button class="text-start py-2 px-4 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">
                            <span class="me-4"><font-awesome-icon icon="fa-solid fa-user"/></span>Profile
                        </button>
                        <button class="text-start py-2 px-4 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">
                            <span class="me-4"><font-awesome-icon icon="fa-solid fa-lock"/></span>Change Password
                        </button>
                        <button class="text-start py-2 px-4 text-black hover:text-white bg-transparent hover:bg-slate-400 transition duration-500 w-full">
                            <span class="me-4"><font-awesome-icon icon="fa-solid fa-right-from-bracket"/></span>Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MenuItem from "../menu/MenuItem.vue";
import { ref } from '@vue/reactivity';
import { vOnClickOutside } from '@vueuse/components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faBars, faUser, faLock, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown, faBars, faUser, faLock, faRightFromBracket, faXmark);

const modal = ref(false);
const closeModal = () => {
    modal.value = false;
}

const buttonStatus = ref(false);
const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
}

const drawer = ref(false);
const receivedDrawerData = ref('');
const handleDrawerData = (data) => {
    receivedDrawerData.value = data;
    drawer.value = receivedDrawerData.value;
}
</script>