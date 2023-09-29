import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';
import api from '../config/api.json';
import { ref } from 'vue';

const app = createApp(App);

const filters = {
    formatDateTime(date) {
        return moment(String(date)).format('MM/DD/YYYY hh:mm:ss A');
    },
    formatTime(date) {
        return moment(String(date)).format('hh:mm:ss A');
    },
    formatDate(date) {
        return moment(String(date)).format('MM-DD-YYYY');
    }
};

/* Configure the Host URL and Server URL */
import server from '../config/server.json';

const hostURL = ref('');
const serverURL = ref('');

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    hostURL.value = server.STAGING_HOST;
    serverURL.value = server.STAGING_SERVER_HOST;
} else {
    hostURL.value = server.HOST;
    serverURL.value = server.SERVER_HOST;
}
/* Configure the Host URL and Server URL */

/* Configure the Axios */
import axios from 'axios';
import VueAxios from 'vue-axios';

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
/* Configure the Axios */

// app.provide('filters', app.config.globalProperties.filters);
// app.provide('api', app.config.globalProperties.api);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
