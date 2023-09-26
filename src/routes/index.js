import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../components/category/Category.vue";
import AddCategory from "../components/category/AddCategory.vue"

const routes = [
    { path: "/", redirect: { name: 'Home' } },
    { path: "/home", name: "Home", component: Home },
    { path: "/category", name: "Category", component: Category },
    { path: "/add-category", name: "AddCategory", component: AddCategory }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
