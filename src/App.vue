<template>
    <div>
        <Header></Header>
        <Footer></Footer>
        <Siderbar></Siderbar>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Siderbar from "./components/layout/Sidebar.vue";

</script>
