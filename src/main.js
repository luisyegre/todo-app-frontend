import { createApp } from 'vue'
import Toast from 'vue-toastification'
import App from './App.vue'
import router from './router'
import "@/assets/main.css"
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(Toast,{
  position: "bottom-right",

})

app.mount('#app')
