import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { ref } from 'vue';

const app = createApp(App);

/* Configure the API JSON File */
import api from '../config/api.json';

app.provide('api', api);
/* Configure the API JSON File */

/* Configure Sweetalert */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(VueSweetalert2);
/* Configure Sweetalert */

/* Configure the Moment JS */
import moment from 'moment';

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

app.provide('filters', filters);
/* Configure the Moment JS */

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

app.provide('hostURL', hostURL.value);
app.provide('serverURL', serverURL.value);
/* Configure the Host URL and Server URL */

/* Configure the Axios */
import axios from 'axios';
import VueAxios from 'vue-axios';

app.use(VueAxios, axios);
app.provide('axios', axios);
/* Configure the Axios */

/* Configure the Font Awesome Icon */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

app.component('font-awesome-icon', FontAwesomeIcon);
/* Configure the Font Awesome Icon */

/* Configure Vue Router */
import router from './routes/index';

app.use(router);
/* Configure Vue Router */

app.mount('#app');
