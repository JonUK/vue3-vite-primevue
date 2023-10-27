import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue';

import 'primevue/resources/themes/lara-light-teal/theme.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
