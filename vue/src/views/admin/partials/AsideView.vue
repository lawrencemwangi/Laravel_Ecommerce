<script setup></script>

<template>
    <div class="admin_sidenav">
        <div class="logo">
            <router-link :to="{ name:'home'}">
                <img src="../../../assets/images/shop.jpg" alt="Shop logo" >
                <h3>Coffee Shop</h3>
            </router-link>
        </div>
        <div class="nav_links">
            <li><i class="fas fa-tachometer-alt"></i><router-link :to="{name:'admin-dashboard'}">Dashboard</router-link></li>
            <li><i class="fas fa-user-lock"></i><router-link :to="{name:'admin-admins'}">Admins</router-link></li>
            <li><i class="fas fa-users"></i><router-link :to="{name:'admin-users'}">Users</router-link></li>
            <li><i class="fas fa-tags"></i><router-link :to="{name:'admin-products'}">Products</router-link></li>
            <li><i class="fas fa-map-marked-alt"></i><router-link :to="{name:'admin-location'}">Locations</router-link></li>
            <li><i class="fas fa-truck-loading"></i><router-link :to="{name:'admin-orders'}">Orders</router-link></li>
        </div>

        <div class="image">
            <img src="../../../assets/images/mwangi.jpg" alt="photo">
            <button class="btn"><a href="#">Logout</a></button>
        </div>
    </div>
</template>