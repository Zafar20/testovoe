<template>
    <nav class="nav">
        <router-link to="/" class="logo">Тестовое</router-link>
        <ul class="list">
            <li v-for="(link,i) in links " :key="i">
                <router-link :to="link.path" class="link">{{ link.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import { ref } from 'vue'

const links = ref([
    { path: '/first', title: 'FirstTask'},
    { path: '/second', title: 'SecondTask'},
    { path: '/third', title: 'ThirdTask'},
    { path: '/four', title: 'FourTask'},
    { path: '/five', title: 'FiveTask'},
])

</script>

