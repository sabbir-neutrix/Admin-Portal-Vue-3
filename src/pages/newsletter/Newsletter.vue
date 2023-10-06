<template>
    <div class="drop-shadow bg-white p-4 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex justify-start items-center gap-3 mb-6 md:mb-0">
                <p class="text-xs md:text-sm font-semibold">Home</p>
                <p class="text-xs md:text-sm font-semibold">></p>
                <p class="text-xs md:text-sm font-semibold">Newsletter List</p>
            </div>
        </div>
        <hr class="my-6 md:my-10 border-b-2"/>
        <div v-if="errorValue">
            Error Encountered: {{ errorValue.message }}
        </div>
        <div v-else-if="newsletterList" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card :data="newsletterList"></Card>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import Card from "./Card.vue";
import { useFetch } from "../../composables/api/use-api";

const api = inject('api');
const serverURL = inject('serverURL');
const url = serverURL + api.newsletter.requestUrl;
const newsletterList = ref([]);
const errorValue = ref(null);

onMounted(async () => {
    const { dataList, error } = await useFetch(url);
    newsletterList.value = dataList;
    errorValue.value = error;
})
</script>