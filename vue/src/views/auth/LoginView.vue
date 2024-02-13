<script setup>
import { ref } from 'vue'
import axios from '@/axios';
import { useRouter } from 'vue-router'

const router =useRouter()
const form = ref({
    email:'',
    password: ''
})

const errorMessage = ref()

const handleLogin = async () => {
    try {
        const response = await axios.post('/login', form.value)
        router.push('/')
    } catch (error) {
        console.error(error)
        if (error.response && error.response.data) {
            errorMessage.value = error.response.data.message || "The data you provided doesn't match ours.";
        } else {
            errorMessage.value = "An error occurred while logging in. Please try again later.";
        }
    }
};
</script>


<template>
    <div class="custom_form">
        <h2>Login</h2>
        <span v-if="errorMessage">{{ errorMessage }}</span>
        <form  @submit.prevent="handleLogin" class="form_container">
            <div class="input_group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" placeholder="Email" />
            </div>
            <div class="input_group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password" placeholder="Password"/>
            </div>
            <button type="submit">Login</button>
            <p><router-link :to="{ name:'forgot-password' }">Forgot password?</router-link></p>
            <p class="links">Don't have an account?<RouterLink :to="{ name:'register'}">Register</RouterLink></p>
        </form>
    </div>
</template>

  
