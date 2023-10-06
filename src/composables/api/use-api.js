import { ref, inject } from "vue";
import { authHeader } from "../auth";

export async function useFetch(url) {
    const axios = inject('axios');
    let dataList = [];
    let error = "";

    const config = {
        method: "GET",
        url: url,
        headers: {
            "Authorization": authHeader()
        }
    };

    try {
        const response = await axios(config);
        if (response.status === 200) {
            dataList = await response.data.data;
        }
    } catch (e) {
        error = e;
    }

    return { dataList, error };
}

export async function usePost(url, data) {
    const axios = inject('axios');
    const responseData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const config = {
        method: "POST",
        url: url,
        data: data,
        headers: {
            "Authorization": authHeader()
        }
    };

    loading.value = true;
    error.value = null;

    try {
        const response = await axios(config);
        responseData.value = response.data;
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }

    return { loading, error, responseData };
}

export async function useDelete(url, id) {
    const axios = inject('axios');
    const responseData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const config = {
        method: "DELETE",
        url: url + '/' + id,
        headers: {
            "Authorization": authHeader()
        }
    };

    loading.value = true;
    error.value = null;

    try {
        const response = await axios(config);
        responseData.value = response.data;
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }

    return { loading, error, responseData };
}