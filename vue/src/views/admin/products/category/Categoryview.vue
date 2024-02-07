<script setup>
import Aside from '../../partials/AsideView.vue';
import useCategories from '../../../../composables/categoryindex';
import { onMounted } from 'vue';

const{ categories, getCategories} = useCategories();

onMounted(() => getCategories());
</script>

<template>
    <main class="Admin">
        <Aside/>

        <section class="main_content">
            <div class="heading">
                <h1>Categories</h1>
                <RouterLink :to="{ name:'admin-products' }">Products</RouterLink>
                <button class="btn">
                    <router-link :to="{name:'admin-category-add'}">  Add New</router-link>
                </button>
            </div>

            <div class="table">
                <table >
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Slug</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories" :key="category.id">
                            <td>{{ category.title }}</td>                            
                            <td>{{ category.slug }}</td>
                            <td> <router-link :to ="{ name: 'admin-category-update' }">
                                <i class="fas fa-pencil-alt"></i></router-link>
                            </td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>
