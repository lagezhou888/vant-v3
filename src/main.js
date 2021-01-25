import { createApp } from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store' // 引入 vuex
import Vant from 'vant';
import 'vant/lib/index.css' // 全局引入样式
import './plugins/index'
import './utils/request'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(store)
app.mount('#app')
