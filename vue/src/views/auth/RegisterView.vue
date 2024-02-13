<script setup>
import { ref } from 'vue';
import axios from '@/axios';
import { useRouter } from 'vue-router';

const router = useRouter()
const form =ref ({
    name:'',
    email:'',
    password:'',
    password_confirmation:''
})

const errorMessage = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});
const handleRegister = async () => {
    try {
        for (const key in errorMessage.value) {
            errorMessage.value[key] = '';
        }

        if (form.value.password !== form.value.password_confirmation) {
            errorMessage.value.password_confirmation = 'Passwords do not match';
            return;
        }

        await axios.post('/register', form.value);
        router.push('/');
    } catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
            const { errors } = error.response.data;
            for (const field in errors) {
                errorMessage.value[field] = errors[field][0];
            }
        }
    }
};
</script>

<template>
    <div class="custom_form">
        <h2>Register</h2>
        <form @submit.prevent="handleRegister" class="form_container">
            <div class="input_group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="form.name" placeholder="Enter your full name">
                <span class="error" v-if="errorMessage.name">{{ errorMessage.name }}</span>
            </div>
            <div class="input_group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="form.email" placeholder="Enter your Email">
                <span class="error" v-if="errorMessage.email">{{ errorMessage.email }}</span>
            </div>
            <div class="input_group">
                <label for="password">password</label>
                <input type="password" name="password" id="password" v-model="form.password" placeholder="Enter your password">
                <span class="error" v-if="errorMessage.password">{{ errorMessage.password }}</span>            </div>
            <div class="input_group">
                <label for="password_confirmation">password</label>
                <input type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation" placeholder="Enter your password">
                <span class="error" v-if="errorMessage.password_confirmation">{{ errorMessage.password_confirmation }}</span>
            </div>
            <button type="submit">Register</button>
            <p class="link"> Already have an account?<router-link :to="{ name:'login' }">Login</router-link></P>
        </form>
    </div> 
</template>