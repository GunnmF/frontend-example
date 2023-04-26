/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-13 17:44:26
 * @LastEditTime: 2023-01-13 17:51:19
 * @LastEditors: moumou.v1@foxmail.com
 */
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style.css'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
