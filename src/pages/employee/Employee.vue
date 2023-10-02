<template>
    <div class="drop-shadow bg-white p-4 md:p-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex justify-start items-center gap-3 mb-6 md:mb-0">
                <p class="text-xs md:text-sm font-semibold">Home</p>
                <p class="text-xs md:text-sm font-semibold">></p>
                <p class="text-xs md:text-sm font-semibold">Employee List</p>
            </div>
            <div class="">
                <router-link to="/add-employee" class="text-sm md:text-base font-medium px-4 md:px-6 py-2 md:py-4 bg-slate-400 text-white rounded-md">
                    +Add New Employee
                </router-link>
            </div>
        </div>
        <hr class="my-6 md:my-10 border-b-2"/>
        <div v-if="errorValue">
            Error Encountered: {{ errorValue.message }}
        </div>
        <div v-else-if="employeesList" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardWithoutImage :data="employeesList"></CardWithoutImage>
        </div>
        <div>
            Loading...
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import CardWithoutImage from "../../components/common-card/CardWithoutImage.vue";
import { useFetch } from "../../composables/api/use-api";

const api = inject('api');
const serverURL = inject('serverURL');
const url = serverURL + api.user.requestUrl;
const employeesList = ref([]);
const errorValue = ref(null);

onMounted(async () => {
    const { dataList, error } = await useFetch(url);
    employeesList.value = dataList;
    errorValue.value = error;
})
</script>