<script setup>
import { ref }  from 'vue'
// import { useRouter } from 'vue-router';
import axios from '@/axios';

const errorMessage = ref('');
// const router = useRouter()
const form = ref({
    email: ''
})
const isSubmitted = ref(false);

const forgotPassword = async () => {
    try {
        const response = await axios.post('/forgot-password', { email: form.value.email })
        if (response.data.success) {
            errorMessage.value = 'Email sent successfully';
        } else {
            errorMessage.value = response.data.message || 'An error occurred while sending email';
        }
    } catch (error) {
        console.error(error)
        if (error.response && error.response.data) {
            errorMessage.value = error.response.data.message || "The data you provided doesn't match ours.";
        } else {
            errorMessage.value = "An error occurred while sending the email. Please try again later.";
        }
    }
}
</script>

<template>
    <div class="custom_form">
        <h1>Forgot Password</h1>
        <form @submit.prevent="forgotPassword">
            <div class="input_group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" placeholder="Enter your email">
                <span  class="error" v-if="isSubmitted && !errorMessage.email">Email is required</span>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        <p>{{ errorMessage }}</p>
    </div>
</template>