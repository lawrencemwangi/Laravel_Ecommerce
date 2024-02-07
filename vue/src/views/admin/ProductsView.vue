<script setup>
import Aside from './partials/AsideView.vue'
</script>

<template>
    <main class="Admin">
        <Aside/>
        <section class="main_content">
            <h1>Products</h1>
            <RouterLink :to="{ name:'admin-category' }">Categories</RouterLink>
        </section>
    </main>
</template>