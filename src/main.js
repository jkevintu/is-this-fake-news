import { createApp } from 'vue'
import VueSocialSharing from 'vue-social-sharing'

import axiosPlugin from '@/plugins/axios'

import App from './App.vue'

const app = createApp(App)
app.use(axiosPlugin)
app.use(VueSocialSharing)

app.mount('#app')
