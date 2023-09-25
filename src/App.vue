<template>
    <div>
        <Header></Header>
        <div class="grid grid-cols-8">
            <div class="bg-red-200 h-screen col-span-2">
                <Siderbar></Siderbar>
            </div>
            <div class="col-span-6 p-4">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Siderbar from "./components/layout/Sidebar.vue";

</script>
