<script setup>
import Navbar from '../components/NavbarComponent.vue'
import product from '../components/ProductComponent.vue'
import Footer from '../components/FooterComponent.vue'

import {ref, onMounted} from 'vue'
import store from '@/store'

const user = ref('');

onMounted(async () => {
        await store.dispatch('getUser')
        const userData = store.getters.user
        if(userData) {
            user.value = userData
        }
    });
</script>

<template>
    <Navbar/>
    <section id="Hero" class="hero">
        <div class="hero_contanier">
            <div class="video">
                <video autoplay  loop muted >
                    <source  src="../assets/video/herovideo.mp4">
                </video>
            </div>
            <div class="hero-content">
            <h1>Welcome to Lawrence Coffee shop</h1>
            <p v-if="user">{{ user.name }}</p>
        </div>
        </div>
    </section>

    <section class="Product_contontainer">
        <div class="container">
            <h1>Popular Products</h1>
        <div class="items_container">
            <product />
            <product />
            <product />
            <product />
        </div>
        </div>
    </section>

  <Footer/>
</template>

