<template>
    <div class="drop-shadow bg-white p-4 md:p-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex justify-start items-center gap-3 mb-6 md:mb-0">
            <p class="text-xs md:text-sm font-semibold">Home</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Categories</p>
        </div>
        <div class="">
            <router-link to="/add-category" class="text-sm md:text-base font-medium px-4 md:px-6 py-2 md:py-4 bg-slate-400 text-white rounded-md">+ Add New Category</router-link>
        </div>
      </div>
        <hr class="my-6 md:my-10 border-b-2" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardWithImage :categories="categories"></CardWithImage>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import CardWithImage from '../../components/common-card/CardWithImage.vue';

const categories = ref([
    {
        title: "Category 1",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 2",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 3",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 4",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 5",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 6",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 7",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 8",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 9",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 10",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 11",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    },
    {
        title: "Category 12",
        description: "Lorem ipsum dolor sit amet consectetur",
        additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
        image: "../../../public/images/demo.jpg",
    }
]);
</script>




