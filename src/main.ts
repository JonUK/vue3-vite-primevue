import './assets/main.scss';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import PrimeVue from 'primevue/config';
import Bootstrap_PassThrough from './plugins/primevue-bootstrap-passthrough';

import { messages } from './i18n/messages';

import App from './App.vue';

const app = createApp(App);

const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

// Use PrimeVue in unstyled mode with Bootstrap Props Pass Through (PT) styling
app.use(PrimeVue, { unstyled: true, pt: Bootstrap_PassThrough });

app.use(i18n);

app.mount('#app');
