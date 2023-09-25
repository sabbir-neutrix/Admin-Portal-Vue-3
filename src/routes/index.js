import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../components/category/Category.vue";

const routes = [
    { path: "/", redirect: { name: 'Home' } },
    { path: "/home", name: "Home", component: Home},
    { path: "/category", name: "Category", component: Category}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
