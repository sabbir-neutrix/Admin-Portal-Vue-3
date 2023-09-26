<template>
    <div class="bg-slate-200 py-3">
        <div class="">
            <div class="flex justify-end items-center _container gap-3">
                <img src="../../../public/images/test.jpg" alt="" class="w-[40px] h-[40px] object-cover rounded-full" />
                <div class="relative" v-click-outside="closeToggle">
                    <button @click="toggleStatus" class="font-semibold">Admin</button>
                    <div v-if="buttonStatus == true" class="absolute top-[40px] left-[-150px] bg-white border rounded-md drop-shadow overflow-hidden z-20 w-[200px]">
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

const buttonStatus = ref(false);

const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
}
const closeToggle = () => {
  if (buttonStatus.value) {
    buttonStatus.value = false;
  }
};

</script>