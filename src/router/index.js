import { createRouter, createWebHistory } from 'vue-router'


import Info from '@/components/Info.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Info', component: Info},
        { path: '/first', name: 'first', component:  () => import('@/components/FirstTask.vue')},
        { path: '/second', name: 'second', component: () => import('@/components/SecondTask.vue')},
        { path: '/third', name: 'third', component: () => import('@/components/ThirdTask.vue')},
        { path: '/four', name: 'four', component: () => import('@/components/FourTask.vue')},
        { path: '/five', name: 'five', component: () => import('@/components/FiveTask.vue')},
    ]
})