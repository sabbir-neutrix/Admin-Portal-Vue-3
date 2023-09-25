import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
    { path: "/", redirect: { name: 'Home' } },
    { path: "/home", name: "Home", component: Home}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
