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
    } catch(e) {
        error = e;
    }

    return { dataList, error };
}