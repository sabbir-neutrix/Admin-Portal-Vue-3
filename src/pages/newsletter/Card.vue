<template>
    <div v-for="(item, index) in data" :key="index" class="border rounded-md p-3">
        <div class="flex justify-between items-center mb-4">
            <div>
                <p class="font-semibold">Sl:</p>
                <p>Email:</p>
            </div>
            <div class="text-end">
                <p class="font-semibold">{{ index+1 }}</p>
                <p>{{ item.email }}</p>
            </div>
        </div>
        <div class="flex justify-end items-center gap-3">
            <button @click="deleteData(item.id)" class="bg-red-500 font-medium px-4 py-1 rounded-full text-white">Delete</button>
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue';
    import { useDelete } from "../../composables/api/use-api";
    import Swal from 'sweetalert2';

    const props = defineProps(['data']);

    const api = inject('api');
    const serverURL = inject('serverURL');
    const url = serverURL + api.newsletter.requestUrl;

    const deleteData = async (id) => {
        const { loading, error, responseData } = await useDelete(url, id);
        console.log("Response: ", responseData.value)
        console.log("Response error: ", error.value)
        // this.$swal('Hello, SweetAlert!', error.value, 'error');
        // Vue.swal('Hello Vue world!!!');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
</script>