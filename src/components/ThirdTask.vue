<template>
    <MultiSelect v-model="selectedSkills" :options="skills" optionLabel="name" placeholder="Select skills"/>
    <span v-if="selectedSkills.length > 0"  @click="reset">×</span>
</template>

<script setup>
import MultiSelect from 'primevue/multiselect';
import 'primeicons/primeicons.css';

import { ref } from "vue";

const selectedSkills = ref([]);
const skills = ref([
    { name: 'Html'},
    { name: 'Css'},
    { name: 'Js'},
    { name: 'Vue'},
]);

const reset = () => {
    selectedSkills.value = []
}

</script>

