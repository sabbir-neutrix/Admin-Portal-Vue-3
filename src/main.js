import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import server from '../config/server.json';
import api from '../config/api.json';

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

const app = createApp(App);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.provide('filters', app.config.globalProperties.filters);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
