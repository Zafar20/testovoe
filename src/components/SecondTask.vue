<template>
    <div>
        <Calendar id="calendar-timeonly" v-model="find" timeOnly  />
        <p>значение  time - {{ time }}</p>
    </div>
</template>

<script setup>
import Calendar from 'primevue/calendar';

import { ref, computed } from "vue";


const time = ref('');

const find = computed({
  get() {
    return time.value
  }, 
  set(val) {
    let hours = new Date(val).getHours()
    let minutes = new Date(val).getMinutes()
    time.value = `${hours}:${minutes}`
  }
})


</script>

<style lang="scss" scoped>

</style>