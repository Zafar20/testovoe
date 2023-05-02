<template>
    <div class="wrapper">
        <div class="top">
            <div class="p-inputgroup p-input">
                <Dropdown class="dropdown" v-model="selectedCategory" :options="columns" optionLabel="field" placeholder="Select a category" />
                <InputText @keydown.enter="getData" v-model="search" class="input__text" placeholder="Поиск..." />
                <i v-if="search.length > 0" @click="close" class="pi pi-times input__icon-close" ></i>
                <Button @click="getData" label="Search" />
            </div>
            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                display="chip" placeholder="Поля таблицы" />
        </div>
        <DataTable :value="allProducts" >
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
                :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import 'primeicons/primeicons.css';

import { ref } from 'vue';


const search = ref('')
const selectedCategory = ref('')

const columns = ref([
    { field: 'name', header: 'Name' },
    { field: 'surname', header: 'Surname' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]);
const selectedColumns = ref(columns.value);

const allProducts = ref([])
const products = ref([
    { name: 'Zafar', surname: 'Ertaev', category: 'frontEnd', quantity: 100 },
    { name: 'Sulton',  surname: 'Nazarov', category: 'frontEnd', quantity: 200 },
    { name: 'Shahri',  surname: 'Ikramitdinov', category: 'frontEnd', quantity: 300 },
    { name: 'Borik',  surname: 'Green', category: 'backEnd', quantity: 400 },
]);

allProducts.value = products.value
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};

const getData = () => {
    if(search.value) {
        allProducts.value = products.value
        allProducts.value = products.value.filter(el => el[selectedCategory.value?.field] == search.value)
    }
}
const close = () => {
    search.value = ''
    allProducts.value = products.value
}


getData()



</script>

<style lang="scss" scoped>

.top {
    display: flex;
    padding: 20px;
    gap: 15px;
}


.p-inputgroup {
    width: 80%;
    position: relative;
}
.input__text {
    width: 100%;
}
.input__icon-close {
    position: absolute;
    right: 7%;
    top: 15px;
}

.dropdown {
    width: 200px;
}


.p-multiselect {
    width: 20%;
}

.p-datatable .p-column-header-content {
    justify-content: center !important;
}

</style>