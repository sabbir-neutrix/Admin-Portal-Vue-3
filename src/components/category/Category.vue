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
            <div v-for="(category, index) in categories" :key="index"
                class="flex justify-between items-center border rounded-md p-3">
                <div class="w-[30%]">
                    <img :src="category.image" alt="" class="w-[70px] h-[70px] object-cover rounded-full" />
                </div>
                <div class="w-[70%]">
                    <p class="text-xl font-semibold line-clamp-2">{{ category.title }}</p>
                    <p class="text-base font-medium leading-5 mb-2 line-clamp-2">{{ category.description }}</p>
                    <p class="text-sm leading-5 line-clamp-2">{{ category.additionalInfo }}</p>
                    <div class="flex justify-start items-center gap-2 mt-3">
                        <button class="bg-slate-400 text-white font-medium rounded-full px-5 py-1">Edit</button>
                        <button class="bg-red-600 text-white font-medium rounded-full px-5 py-1">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Category 1",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 2",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 3",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 4",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 5",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 6",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 7",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 8",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 9",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 10",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 11",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
        {
          title: "Category 12",
          description: "Lorem ipsum dolor sit amet consectetur",
          additionalInfo: "Laborum deleniti voluptatum distinctio quibusdam iusto, rem quasi in asperiores",
          image: "../../../public/images/test.jpg",
        },
      ],
    };
  },
};
</script>




