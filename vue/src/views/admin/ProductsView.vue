<script setup>
import Aside from './partials/AsideView.vue'
</script>

<template>
    <main class="Admin">
        <Aside/>
        <section class="main_content">
            <div class="link_nav">
                <div class="links">
                    <RouterLink :to="{ name:'admin-category' }" >Categories</RouterLink>
                </div>
                <div class="links">
                    <RouterLink :to="{ name:'admin-products' }">Products</RouterLink>
                </div>
            </div>
            <div class="heading">
                <h1>Products</h1>
                <input type="text" name="search" id="search" placeholder="Search Here">
                <button class="btn">
                    <router-link :to="{name:'admin-category-add'}">  Add New</router-link>
                </button>
            </div>

            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price (Kshs)</th>
                            <th>Discount</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cappuccino</td>
                            <td>Roast Level</td>
                            <td>450</td>
                            <td>4%</td>
                            <td> <i class="fas fa-pencil-alt"></i></td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>