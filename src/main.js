import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');
