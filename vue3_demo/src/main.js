import { createApp } from 'vue';
import App from './App.vue'
import helloWorld from '@/components/helloWorld'
import ui from './ui/index'
const app = createApp(App)
console.log(app)
app.component(helloWorld.name, helloWorld)
console.log(app)

app.use(ui, ['myButton', 'myInput'])
app.mount('#app')
