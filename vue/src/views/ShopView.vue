<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Product from '../components/ProductComponent.vue'
</script>

<template>
    <Navbar/>

    <section class="shop_container">
        <div class="container">
            <h1>Shop</h1>
            <div class="search">
                <input type="text" name="search" id="search" placeholder="Search here">
            </div>
            <div class="items_container">
                <product/>
                <product/>
                <product/>
                <product/>
                <product/>
                <product/>
                <product/>
                <product/>
                <product/>
            </div>
        </div>
    </section>
    <Footer/>
</template>