<script setup>
</script>

<template>
   <div class="hello">
        <div class="logo">
            <a href="#">
                <img src="../assets/images/cup.jpg" width="40px" height="40px" alt="Shop logo">
                <h1>Coffee Shop</h1>
            </a>
        </div>  
        <ul id="navLinks" >
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'shop' }">Shop</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
            <li><router-link :to="{name: 'login'}">Login</router-link></li>
        </ul> 
        <div class="burger_menu">
            <div class="burger_icon" id="burgerIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
   </div>
</template>


