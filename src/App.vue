<template>
    <div class="grid grid-cols-10">
        <div class="col-span-2 hidden md:block border-r-2">
            <Siderbar></Siderbar>
        </div>
        <div class="col-span-10 md:col-span-8">
            <Header></Header>
            <div class="h-[calc(100vh-125px)] overflow-hidden overflow-y-auto p-4">
                <router-view></router-view>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Siderbar from "./components/layout/Sidebar.vue";

</script>
