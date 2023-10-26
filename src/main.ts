import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue';

import 'primevue/resources/themes/lara-light-teal/theme.css';

import Button from 'primevue/button';

const app = createApp(App);
app.use(PrimeVue);
app.component('PButton', Button);
app.mount('#app');
