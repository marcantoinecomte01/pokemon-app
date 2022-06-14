import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import i18n from './i18n'

var app = createApp(App)
  
app.use(i18n);
app.use(VueAxios, axios)
app.mount('#app')
