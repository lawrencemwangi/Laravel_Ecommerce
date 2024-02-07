<script setup>
import { ref } from 'vue'
import axios from '../axios';
import { useRouter } from 'vue-router'

const router =useRouter()
const form = ref({
    email:'',
    password: ''
})

const errorMessage = ref()

const handleLogin = async () => {
    try {
        await axios.post('/login', form.value)
        router.push('/')
    } catch (error) {
        console.error(error)
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = "The data you prodived doesn't match ours.";
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
                <input type="email" name="email" id="email" v-model="form.email" required/>
            </div>
            <div class="input_group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password" required/>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/register" class="register">Register</a></p>
        </form>
    </div>
</template>

  
