import './bootstrap';

import '../sass/app.scss';
import { createApp } from 'vue';
import router from './router';
import App from './components/App.vue';


const app = document.querySelector('#app');
if (app) {
  createApp(App).use(router).mount(app);
}