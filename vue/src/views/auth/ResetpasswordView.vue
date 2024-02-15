<script setup>
import { useRouter } from 'vue-router';
import axios from '@/axios';
import { ref } from 'vue'

const router = useRouter()
const form = ref({
    password:'',
    confirm_password:'',
    email: router.query.email || '',  
    token: router.query.token || '',
})

const passwordReset = async () => {
    try {
        await store.dispatch('passwordReset', form.value);
        router.push('/login');
    } catch (error) {
        console.error('An error occurred during password reset:', error.message);
    }
};
</script>

<template>
    <div class="custom_form ">
        <h1>Reset Password</h1>
        <form @submit.prevent="passwordReset" class="form_container">
            <div class="input_group">
                <label for="password">New Password</label>
                <input type="password" name="password" id="password" v-model="form.password" placeholder="New password">
            </div>
            <div class="input_group">
                <label for="confirm_password">Confrim password</label>
                <input type="password" name="confrim_password" id="confirm_password" v-model="form.confirm_password" placeholder="Confrim password">
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
</template>