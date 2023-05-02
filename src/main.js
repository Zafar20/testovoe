import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import ToastService from 'primevue/toastservice';

import App from './App.vue'

import "primevue/resources/themes/lara-light-indigo/theme.css";     
    

import "primevue/resources/primevue.min.css";

import '@/assets/styles/main.scss'


import { router} from '@/router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.use(ToastService);

app.mount('#app')
