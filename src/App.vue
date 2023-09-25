<template>
    <div>
        <Header></Header>
        <div class="grid grid-cols-8 gap-4">
            <div class="bg-red-600 h-screen col-span-2">
                <Siderbar></Siderbar>
            </div>
            <div>
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
