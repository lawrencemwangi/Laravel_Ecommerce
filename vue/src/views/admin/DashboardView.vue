<script setup>
import Aside from './partials/AsideView.vue'
</script>

<template>
    <main class="Admin">
        <Aside/>
        <section class="main_content">
            <h1>Dashboard</h1>

            <div class="dashboard_container">
                <div class="dashboard_content">
                    <i class="fas fa-tachometer-alt"></i>
                    <div class="dash_items">
                        <h3>Admins</h3>
                        <span>5</span>
                    </div>
                </div>
                <div class="dashboard_content">
                    <i  class="fas fa-users" ></i>
                    <div class="dash_items">
                        <h3>Users</h3>
                        <span>15</span>
                    </div>
                </div>
                <div class="dashboard_content">
                    <i class="fas fa-tag"></i>
                    <div class="dash_items">
                        <h3>Products</h3>
                        <span>25</span>
                    </div>
                </div>
                <div class="dashboard_content">
                    <i class="fas fa-barcode"></i>
                    <div class="dash_items">
                        <h3>Orders</h3>
                        <span>32</span>
                    </div>
                </div>
                <div class="dashboard_content">
                    <i class="fas fa-balance-scale"></i>
                    <div class="dash_items">
                        <h3>Sales</h3>
                        <span>15</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>