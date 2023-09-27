<template>
    <div class="p-4">
        <div class="mb-7">
          <h1 class="text-3xl font-semibold">Super Admin</h1>
        </div>
        <div class="h-[calc(100vh-100px)] overflow-hidden overflow-y-auto">
          <div>
              <button v-for="(buttons, index) in buttons" :key="index" class="bg-slate-400 w-full p-2 mb-4">
                  {{buttons.title}}
              </button>
          </div>
          <div class="mb-4">
            <button @click="toggleStatus" class="flex justify-between items-center bg-red-500 w-full p-2">
              <p class="">SeeMore</p>
              <p v-if="buttonStatus == true">hide</p>
              <p v-else>></p>
            </button>
            <div v-if="buttonStatus == true" class="px-4 py-2">
              <div>
                <button>Button1</button>
              </div>
              <div>
                <button>Button2</button>
              </div>
              <div>
                <button>Button2</button>
              </div>
            </div>
          </div>
          <div>
              <button v-for="(buttons, index) in buttons" :key="index" class="bg-slate-400 w-full p-2 mb-4">
                  {{buttons.title}}
              </button>
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


      const buttons = [
        {
          title: "Category",
          icon: "",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Category 2",
          icon: "",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Category 3",
          icon: "",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
        {
          title: "Category 4",
          icon: "",
          url: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        },
      ]
</script>