import "bootstrap/dist/css/bootstrap.min.css"


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

//import VueAxios from 'vue-axios'


createApp(App)
    .use(router)
   
 
.use(store).mount('#app')


    
import "bootstrap/dist/js/bootstrap.js"