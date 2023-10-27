import './assets/main.scss'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import Bootstrap_PassThrough from './plugins/primevue-bootstrap-passthrough';

import App from './App.vue';

const app = createApp(App);

// Use PrimeVue in unstyled mode with Bootstrap styling
// https://primevue.org/bootstrap
app.use(PrimeVue, { unstyled: true, pt: Bootstrap_PassThrough });

app.mount('#app');
