import { ref } from "vue";

export function useFetch() {
    const employees = ref(null);
    const error = ref(null);

    async function doFetch() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            employees.value = await response.json();
        } catch(e) {
            error.value = e;
        }
    }

    doFetch();

    return { employees, error };
}