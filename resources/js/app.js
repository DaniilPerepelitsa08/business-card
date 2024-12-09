import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

AOS.init({
    duration: 1000,
    once: true,
});

app.mount('#app');
