import { createApp } from 'vue'

import axiosPlugin from '@/plugins/axios'

import App from './App.vue'

const app = createApp(App)
app.use(axiosPlugin)
app.mount('#app')
