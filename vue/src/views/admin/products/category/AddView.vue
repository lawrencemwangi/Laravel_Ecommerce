<script setup>
import Aside from '../../partials/AsideView.vue'
import useCategories from '../../../../composables/categoryindex'
const { storeCategory } = useCategories();

import { reactive } from 'vue';
const form =reactive({
   title:"",
});

</script>

<template>
    <main class="Admin">
        <Aside/>

        <section class="main_content">
            <div class="custom_form">
                <h1>Add Category</h1>
                
                <form action="" method="post" @submit.prevent="storeCategory(form)">
                    <div class="input_group">
                        <label for="title" >Title</label>
                        <input type="text" name="title" id="titel" v-model="form.title" autofocus>
                    </div>
                    <button type="submit" class="btn">Save</button>
                </form>
            </div>
        </section>
    </main>
</template>