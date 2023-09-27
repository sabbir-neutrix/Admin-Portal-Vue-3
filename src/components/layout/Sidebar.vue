<template>
    <div class="p-4">
        <div class="mb-7">
          <h1 class="text-3xl font-semibold">Super Admin</h1>
        </div>
        <div class="h-[calc(100vh-100px)] overflow-hidden overflow-y-auto">
          <div>
              <button v-for="(buttons, index) in buttons" :key="index" class="text-start w-full p-2 mb-4 text-black hover:text-blue-400">
                <span class="me-2"><font-awesome-icon :icon="buttons.icon"/></span>{{buttons.title}}
              </button>
          </div>
          <div class="mb-4">
            <button @click="toggleStatus" class="flex justify-between items-center w-full p-2 text-black hover:text-blue-400">
              <p class=""><span class="me-2"><font-awesome-icon icon="fa-solid fa-gears" /></span>Services</p>
              <p v-if="buttonStatus == true"><font-awesome-icon icon="fa-solid fa-chevron-up" /></p>
              <p v-else><font-awesome-icon icon="fa-solid fa-chevron-down" /></p>
            </button>
            <div v-if="buttonStatus == true" class="px-4 py-2">
              <div>
                <button class="text-sm mb-2 text-black hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right" /></span>Button1</button>
              </div>
              <div>
                <button class="text-sm mb-2 text-black hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right" /></span>Button1</button>
              </div>
              <div>
                <button class="text-sm mb-2 text-black hover:text-blue-400 w-full text-start"><span class="me-2"><font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right" /></span>Button1</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from '@vue/reactivity';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown,faChevronUp,faChevronRight,faTableCells,faClock,faShapes,faGears,faBookmark } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
library.add(faChevronDown,faChevronUp,faTableCells,faClock,faBookmark,faShapes,faGears,faChevronRight)

const buttonStatus = ref(false);

const toggleStatus = () => {
    buttonStatus.value = !buttonStatus.value;
}


      const buttons = [
        {
          title: "Dashboard",
          icon: "fa-solid fa-table-cells",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Schedule",
          icon: "fa-solid fa-clock",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Manage Booking",
          icon: "fa-solid fa-bookmark",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Category",
          icon: "fa-solid fa-shapes",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
      ]
</script>