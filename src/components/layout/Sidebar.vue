<template>
    <div class="p-4">
        <div>
            <button v-for="(buttons, index) in buttons" :key="index" class="bg-slate-400 w-full p-2 mb-4">
                {{buttons.title}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
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
      ],
    };
  },
};
</script>