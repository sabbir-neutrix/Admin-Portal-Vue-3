import { ref } from "vue";

export function useFetch(url) {
    const employees = ref(null);
    const error = ref(null);

    async function doFetch() {
        try {
            const response = await fetch(url);
            employees.value = await response.json();
        } catch(e) {
            error.value = e;
        }
    }

    doFetch();

    return { employees, error };
}