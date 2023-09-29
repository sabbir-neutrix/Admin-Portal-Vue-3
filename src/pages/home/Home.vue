<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <CardOne :cardOneData="cardOneData"></CardOne>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <CardTwo :cardTwoData="cardTwoData"></CardTwo>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="bg-[#343A40] m-1 text-white rounded-md p-2">
            <p>Chart 1</p>
        </div>
        <div class="bg-[#343A40] m-1 text-white rounded-md p-2">
            <p>Chart 2</p>
        </div>
        <div>
            <CardThree :cardThreeData="cardThreeData"></CardThree>
        </div>
    </div>
</template>

<script setup>
import CardOne from './components/CardOne.vue';
import CardTwo from './components/CardTwo.vue';
import CardThree from './components/CardThree.vue'
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';
const cardOneData = [
    {
        sl: 1,
        title: 'Recent Appointment',
        subTitle: 'You have 1 recent appointment',
        icon: ''
    },
    {
        sl: 2,
        title: 'Cancel Appointment',
        subTitle: 'You have 1 recent appointment',
        icon: ''
    },
    {
        sl: 3,
        title: 'Reschedule Appointment',
        subTitle: 'You have 1 recent appointment',
        icon: ''
    },
    
]
const cardTwoData = [
    {
        sl: 1,
        title: 'CPU Traffic',
        subTitle: '10%',
        icon: 'fa-solid fa-gear',
        background:'bg-[#17A2B8]',
    },
    {
        sl: 2,
        title: 'Likes',
        subTitle: '41,410',
        icon: 'fa-solid fa-thumbs-up',
        background:'bg-[#DC3545]',
    },
    {
        sl: 3,
        title: 'Sales',
        subTitle: '760',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#28A745]',
    },
    {
        sl: 4,
        title: 'New Members',
        subTitle: '2000',
        icon: 'fa-solid fa-user-group',
        background:'bg-[#FFC107]',
    },
    
]
const cardThreeData = [
    {
        sl: 1,
        title: 'CPU Traffic',
        subTitle: '10%',
        icon: 'fa-solid fa-gear',
        background:'bg-[#DC3545]',
    },
    {
        sl: 2,
        title: 'Likes',
        subTitle: '41,410',
        icon: 'fa-solid fa-thumbs-up',
        background:'bg-[#28A745]',
    },
    {
        sl: 3,
        title: 'Sales',
        subTitle: '760',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#FFC107]',
    },
    {
        sl: 4,
        title: 'New Members',
        subTitle: '2000',
        icon: 'fa-solid fa-user-group',
        background:'bg-[#17A2B8]',
    },
    
]
// const chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//     onClick: (e) => {
//       const canvasPosition = getRelativePosition(e, chart);

//       // Substitute the appropriate scale IDs
//       const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//       const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//     }
//   }
// });

import { library } from '@fortawesome/fontawesome-svg-core';
    import { faGear,faThumbsUp,faCartShopping,faUserGroup} from '@fortawesome/free-solid-svg-icons'
    library.add(faGear,faThumbsUp,faCartShopping,faUserGroup)
</script>