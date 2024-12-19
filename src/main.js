import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

import 'virtual:windi.css'
import './style.css'
import './theme.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(TDesign)
app.mount('#app')
