<template>
    <div>
        <Header></Header>
        <div class="grid grid-cols-8 gap-4">
            <div class="bg-red-600 h-screen col-span-2">
                <Siderbar></Siderbar>
            </div>
            <div class="bg-green-600 h-screen col-span-6">
                <MainContent></MainContent>
            </div>

        </div>
        <Footer></Footer>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Siderbar from "./components/layout/Sidebar.vue";
import MainContent from "./components/layout/MainContent.vue"

</script>
