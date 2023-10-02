<template>
    <div v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.url" @click="sendDrawerFlag">
            <button class="text-start w-full p-2 mb-2 text-[#CDD2D8] hover:text-blue-400">
                <span class="me-2"><font-awesome-icon :icon="item.icon"/></span>{{ item.title }}
            </button>
        </router-link>
    </div>
    <div class="mb-2">
        <button @click="toggleStatus" class="flex justify-between items-center w-full p-2 text-[#CDD2D8] hover:text-blue-400">
            <p><span class="me-2"><font-awesome-icon icon="fa-solid fa-gears"/></span>Services</p>
            <p v-if="buttonStatus == true"><font-awesome-icon icon="fa-solid fa-chevron-up"/></p>
            <p v-else><font-awesome-icon icon="fa-solid fa-chevron-down"/></p>
        </button>
        <div v-if="buttonStatus == true" class="px-4 py-2">
            <div>
                <button class="text-sm mb-2 text-[#CDD2D8] hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right"/></span>Button1</button>
            </div>
            <div>
                <button class="text-sm mb-2 text-[#CDD2D8] hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right"/></span>Button1</button>
            </div>
            <div>
                <button class="text-sm mb-2 text-[#CDD2D8] hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right"/></span>Button1</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp, faChevronRight, faTableCells, faClock, faShapes, faGears, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp, faTableCells, faClock, faBookmark, faShapes, faGears, faChevronRight);

const emit = defineEmits(['drawerFlag']);
const sendDrawerFlag = () => {
    emit('drawerFlag', false);
}

const buttonStatus = ref(false);
const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
};

const menuItems = [
    {
        title: "Dashboard",
        icon: "fa-solid fa-table-cells",
        url: "/"
    },
    {
        title: "Employee",
        icon: "fa-solid fa-clock",
        url: "/employee"
    },
    {
        title: "Service",
        icon: "fa-solid fa-bookmark",
        url: "/service"
    },
    {
        title: "Category",
        icon: "fa-solid fa-shapes",
        url: "/category"
    },
    {
        title: "Contact",
        icon: "fa-solid fa-shapes",
        url: "/contact"
    }
]
</script>

