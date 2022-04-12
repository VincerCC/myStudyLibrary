import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import Vant from 'vant';
import 'vant/lib/index.css';
app.use(Vant);

import './index.css'

import router from './router/index.ts'
app.use(router)



import store from './store'
app.use(store)

app.mount('#app')
