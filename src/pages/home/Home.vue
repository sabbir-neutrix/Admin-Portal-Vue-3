<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <CardOne :cardOneData="cardOneData"></CardOne>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <CardTwo :cardTwoData="cardTwoData"></CardTwo>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="bg-[#343A40] m-1 text-white rounded-md p-2">
            <DoughnutChart :chartData="chartData"/>
        </div>
        <div class="bg-[#343A40] m-1 text-white rounded-md p-2">
            <DoughnutChart :chartData="chartData"/>
        </div>
        <div>
            <CardThree :cardThreeData="cardThreeData"></CardThree>
        </div>
    </div>
</template>

<script setup>
import CardOne from './components/CardOne.vue';
import CardTwo from './components/CardTwo.vue';
import CardThree from './components/CardThree.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear, faThumbsUp, faCartShopping, faUserGroup} from '@fortawesome/free-solid-svg-icons'
library.add(faGear, faThumbsUp, faCartShopping, faUserGroup);

import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

const cardOneData = [
    {
        sl: 1,
        title: 'Total Order',
        subTitle: 'You have 10 total orders',
        icon: 'fa-solid fa-cart-shopping'
    },
    {
        sl: 2,
        title: 'Confirmed Order',
        subTitle: 'You have 1 confirmed order',
        icon: 'fa-solid fa-cart-shopping'
    },
    {
        sl: 3,
        title: 'Canceled Order',
        subTitle: 'You have 1 canceled order',
        icon: 'fa-solid fa-cart-shopping'
    }
];

const cardTwoData = [
    {
        sl: 1,
        title: 'Total Products',
        quantity: '10%',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#17A2B8]'
    },
    {
        sl: 2,
        title: 'Total Sales',
        quantity: '41,410',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#DC3545]'
    },
    {
        sl: 3,
        title: 'Today Total Sales',
        quantity: '760',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#28A745]'
    },
    {
        sl: 4,
        title: 'Total Customers',
        quantity: '2000',
        icon: 'fa-solid fa-user-group',
        background:'bg-[#FFC107]'
    }
];

const cardThreeData = [
    {
        sl: 1,
        title: 'Today Total Order',
        quantity: '2',
        icon: 'fa-solid fa-user-group',
        background:'bg-[#17A2B8]'
    },
    {
        sl: 2,
        title: 'Today Pending Order',
        quantity: '10',
        icon: 'fa-solid fa-gear',
        background:'bg-[#DC3545]'
    },
    {
        sl: 3,
        title: 'Today Confirmed Order',
        quantity: '41',
        icon: 'fa-solid fa-thumbs-up',
        background:'bg-[#28A745]'
    },
    {
        sl: 4,
        title: 'Today Delivered Order',
        quantity: '760',
        icon: 'fa-solid fa-cart-shopping',
        background:'bg-[#FFC107]'
    },
    {
        sl: 5,
        title: 'Today Canceled Order',
        quantity: '2',
        icon: 'fa-solid fa-user-group',
        background:'bg-[#17A2B8]'
    }
]

/* Chart Data */
Chart.register(...registerables);

const chartData = {
    labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
    datasets: [{
        data: [30, 40, 60, 70, 5],
        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED']
    }]
};
</script>