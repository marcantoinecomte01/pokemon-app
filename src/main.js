import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { createI18n } from 'vue-i18n';
import en from './components/locales/en.js';

var app = createApp(App)
const i18n = new createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      'en': en,
    }
  })

app.use(i18n);
app.use(VueAxios, axios)
app.mount('#app')
