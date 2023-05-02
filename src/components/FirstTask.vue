<template>
    <div class="container">
    
      <InputText :disabled="editing" @focus="get" @blur="getTitle" type="text" v-model="url" placeholder="https://"/>
      <i v-if="editing" class="pi pi-pencil" @click="editLink"></i>
    </div>
  
  </template>
  
  <script setup>
  import InputText from 'primevue/inputtext';
  import 'primeicons/primeicons.css';
  import axios from 'axios'
  
  import { ref } from 'vue';
  
  const url = ref('');
  const url2 = ref('')
  // const title = ref('');
  const editing = ref(false);
  const apiKey = ref('5f2b900b0092c6523a7b0044c06df986')


  const get =  () => {
    if(url2.value != '') {
      url.value = url2.value
    }else {
      url.value = 'https://'
    }
  }
  
  const getTitle = async () => {
    let response = await  axios.get(`https://api.linkpreview.net/?key=${apiKey.value}&q=${url.value}`)
    url2.value = url.value
    url.value = response.data.title
    editing.value = true
  }
  
  const editLink = () => {
    editing.value = false
    url.value = url2.value
  }
  
  
  </script>
  
  <style lang="scss" scoped>
  
  
  
  </style>