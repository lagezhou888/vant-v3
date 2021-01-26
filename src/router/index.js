// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/home.vue'
import Login from '/@/views/login.vue'

// createRouter 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

// 抛出路由实例, 在 main.js 中引用
export default router
