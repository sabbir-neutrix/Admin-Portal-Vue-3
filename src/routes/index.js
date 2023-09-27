import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../components/category/Category.vue";
import AddCategory from "../components/category/AddCategory.vue";
import Employee from "../components/employee/Employee.vue";
import AddEmployee from "../components/employee/AddEmployee.vue";
import Service from "../components/service/Service.vue";
import AddService from "../components/service/AddService.vue"

const routes = [
    { path: "/", redirect: { name: 'Home' } },
    { path: "/home", name: "Home", component: Home },
    { path: "/category", name: "Category", component: Category },
    { path: "/add-category", name: "AddCategory", component: AddCategory },
    { path: "/employee", name: "Employee", component: Employee },
    { path: "/add-employee", name: "AddEmployee", component: AddEmployee },
    { path: "/service", name: "Service", component: Service },
    { path: "/add-service", name: "AddService", component: AddService },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
